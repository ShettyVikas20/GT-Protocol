// Avatar.jsx
import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";

const Avatar = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image);

      try {
        const response = await fetch("http://localhost:5000/cartoonize", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result); // Handle the result as needed
        } else {
          console.error("Error while sending the image");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={onImageChange} accept=".jpg, .jpeg, .png" />
      {preview && (
        <>
          <AvatarEditor image={preview} width={250} height={250} />
          <button className='bg-black' onClick={onSubmit}>Upload and Cartoonize</button>
          <a href={preview} download="avatar">
            Download image
          </a>
        </>
      )}
    </div>
  );
};

export default Avatar;
