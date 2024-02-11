// frontend/src/Avatar.jsx
import React, { useState } from 'react';

const Avatar = () => {
  const [fileSelectedMessage, setFileSelectedMessage] = useState('');
  const [resultImage, setResultImage] = useState(null);

  const showFileSelectedMessage = (e) => {
    const fileInput = e.target;
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      setFileSelectedMessage(`File selected: ${fileName}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setResultImage(result.result_image);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="container">
      <h1>Cartoonizer</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" action="/upload">
        <label htmlFor="file" className="file-upload-label">
          Choose File
        </label>
        <input
          id="file"
          className="fileupload"
          type="file"
          name="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={(e) => {
            showFileSelectedMessage(e);
          }}
        />
        <div id="file-selected-message" className="file-selected-message">
          {fileSelectedMessage}
        </div>
        <button type="submit" className="submit-button">
          Upload and Cartoonize
        </button>
      </form>
      {resultImage && (
        <div className="result">
          <img src={resultImage} alt="Cartoonized Image" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
