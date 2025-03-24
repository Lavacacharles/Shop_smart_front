import React, { useEffect } from "react";
import { useState } from "react";
import Camera_icon from '../imagenes/camera_icon.png' 
import '../App.css'
const ImageInput = (props) => {
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
      console.log("cambio imgfile en el input")
      if(imageFile){
        props.handleCamera(imageFile);
        console.log(imageFile)
      }
    }, [imageFile])

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      
      if (file) {
        setImageFile(file)
        // props.handleCamera(file);
        // const reader = new FileReader();
        // // reader.onloadend = () => {
        // //   setImagePreview(reader.result);
        // // };
        // // reader.readAsDataURL(file);
        // props.handleCamera(file);
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