# backend/main.py
from flask import Flask, render_template, request, jsonify
import cv2
import numpy as np
from PIL import Image
from io import BytesIO
from base64 import b64encode

app = Flask(__name__)

def cartoonize_image(img, k_size=5, sketch_mode=False):
    # Convert image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Apply bilateral filter for edge-aware smoothing
    img_bilateral = cv2.bilateralFilter(img, d=9, sigmaColor=75, sigmaSpace=75)

    # Apply median filter for noise reduction
    img_median = cv2.medianBlur(img_bilateral, k_size)

    # Create an edge mask using adaptive thresholding
    edges = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 9, 9)

    # Combine color and edges
    if sketch_mode:
        img_cartoon = cv2.ximgproc.anisotropicDiffusion(img_median, alpha=0.4, K=70)
    else:
        img_cartoon = cv2.bitwise_and(img_bilateral, img_bilateral, mask=edges)

    # Apply a bilateral filter to smooth colors and enhance edges
    img_cartoon = cv2.bilateralFilter(img_cartoon, 9, 300, 300)

    return img_cartoon

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        file = request.files['file']
        if file:
            image = Image.open(BytesIO(file.read()))
            img_np = np.array(image)
            img_bgr = cv2.cvtColor(img_np, cv2.COLOR_RGB2BGR)
            cartoon_image = cartoonize_image(img_bgr, k_size=5, sketch_mode=False)
            _, img_encoded = cv2.imencode('.png', cartoon_image)
            img_str = img_encoded.tostring()
            result_image = 'data:image/png;base64,' + str(b64encode(img_str), 'utf-8')
            return render_template('index.html', result_image=result_image)
    
    return render_template('index.html', result_image=None)

# Update the route for file upload
@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        image = Image.open(BytesIO(file.read()))
        img_np = np.array(image)
        img_bgr = cv2.cvtColor(img_np, cv2.COLOR_RGB2BGR)
        cartoon_image = cartoonize_image(img_bgr, k_size=5, sketch_mode=False)
        _, img_encoded = cv2.imencode('.png', cartoon_image)
        img_str = img_encoded.tostring()
        result_image = 'data:image/png;base64,' + str(b64encode(img_str), 'utf-8')

        return jsonify({'result_image': result_image}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5173)
