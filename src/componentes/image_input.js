import React from "react";
import { useState } from "react";
import Camera_icon from '../imagenes/camera_icon.png' 
import '../App.css'
const ImageInput = (props) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result); // Establece la vista previa como base64
        };
        reader.readAsDataURL(file); // Convierte la imagen a base64
      }
    };
    const handleClick = () => {
        document.getElementById('hiddenFileInput').click();
      };
    return (
        <div className="camera_container">
          <input 
            type="file" 
            accept="image/*" 
            id="hiddenFileInput" 
            style={{ display: 'none' }} 
            onChange={handleImageChange} 
          />
    
          <img 
            src={Camera_icon} 
            className="camera" 
            onClick={handleClick} 
            alt="Camera Icon"
          />
    
          {imagePreview && (
            <div style={{ position: 'absolute', top: '60px', left: '0', textAlign: 'center' }}>
              <h4>Vista previa:</h4>
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{ width: '200px', height: 'auto', borderRadius: '8px', border: '2px solid #ddd' }}
              />
            </div>
          )}
        </div>
      );
    };
    
  
  export default ImageInput;
//   <img 
//   src={Camera_icon} 
//   className='camera' 
//   onClick={props.handleCamera}
//   style={{ cursor: 'pointer' }}
//   alt="Placeholder"
// ></img>