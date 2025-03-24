import React, { useState } from 'react';
import camera_icon from '../imagenes/camera_icon.png'
const FileUploadForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  // Maneja el cambio en el input de archivo
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleClick = () => {
    document.getElementById('ImageInput').click();
  };
  return (
    
    <div className="camera_container">
      <input 
        type="file" 
        accept="image/*" 
        id="ImageInput" 
        style={{ display: 'none' }} 
        onChange={handleFileChange} 
      />

      <img 
        src={camera_icon} 
        className="camera" 
        onClick={handleClick} 
        alt="Camera Icon"
        style={{ 
          // justifySelf: 'center !important' ,
          alignSelf: 'center !important',
          bottom:'18px',
          right:'100px',
          // position:'fixed',
          borderColor: 'black',
          backgroundColor:'black',
        }} 
      />

    </div>
  );
};

export default FileUploadForm;
