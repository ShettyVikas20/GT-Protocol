// src/components/Avatar.jsx
import React, { useState } from 'react';
import '../assets/Cartoonbg.png'

const Avatar = () => {
  const [fileSelectedMessage, setFileSelectedMessage] = useState('');
  const [resultImage, setResultImage] = useState(null);

  const showFileSelectedMessage = (e) => {
    const fileInput = e.target;
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      setFileSelectedMessage(`File selected: ${fileName}`);

      // Display confirmation message for 3 seconds
      setTimeout(() => {
        setFileSelectedMessage('');
      }, 3000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      const response = await fetch('http://127.0.0.1:5000', {
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

  document.body.style.background = " url('https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a65_GT_features_BG.webp')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";

  return (
    <div className="container mx-auto my-10 bg-black text-white h-screen overlay bg-opacity-70 backdrop-blur-md pt-10 rounded-lg border-2">
      <h1 className="text-4xl font-bold mb-4 text-center">Cartoonizer</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" action="/upload" className="flex flex-col items-center">
        <label htmlFor="file" className="file-upload-label p-2 mb-2 border border-white rounded-lg items-center cursor-pointer hover:border-indigo-500 hover:border-2">
          Choose File
        </label>
        <input
          id="file"
          className="fileupload hidden items-center "
          type="file"
          name="file"
          accept=".jpg, .jpeg, .png"
          required
          onChange={(e) => {
            showFileSelectedMessage(e);
          }}
        />
        <div id="file-selected-message" className="file-selected-message items-center mb-2">
          {fileSelectedMessage}
        </div>
        <button type="submit" className="submit-button p-2 border border-white rounded-lg cursor-pointer hover:border-indigo-500 hover:border-2">
          Upload and Cartoonize
        </button>
      </form>
      {resultImage && (
        <div className="result mt-4">
          <img src={resultImage} alt="Cartoonized Image" className="max-w-64 max-h-80  border mx-auto border-white rounded p-2 bg-white mt-12 hover:border-indigo-500 hover:border-2" />
        </div>
      )} 
    </div>
  );
};

export default Avatar;
