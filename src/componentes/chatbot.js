import React, { useEffect, useState, useRef } from 'react';
import { Button, Drawer, Space, Input, List, Card, Col, Popover} from 'antd';
import chat_bot_icon from '../imagenes/chat_bot_icon.jpg'
// import camera_icon from '../imagenes/camera_icon.png'
import CameraOutlined from '@ant-design/icons/CameraOutlined';
// import FileUploadForm from './FileUploadForm';
import '../App.css';

const Chatbot = () => {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [loading, setLoading] = useState(false);
  // const [tipoEnvio, setTipoEnvio] = useState("texto");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [data, setData] = useState(null);

  const empezarCarga = () => setLoading(true);
  const terminoCarga = () => setLoading(false);
  const toggleChat = () => setVisible(!visible);


  const RequestImage = async (inputUsuario, imageUsuario) => {
    const url = data["api_image"]
    // "http://127.0.0.1:8000/chat_image";
    try {
      const formData = new FormData();
      formData.append("text", inputUsuario);
      formData.append("image", imageUsuario);
      
      // No es necesario establecer 'Content-Type' cuando se usa FormData,
      // el navegador lo gestiona automáticamente, incluyendo el boundary.
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  

  const RequestTexto = async (inputUsuario) => {
    const url = data["api_text"]
    // "http://127.0.0.1:8000/chat_text";
    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'question': inputUsuario }) 
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleRespuesta = (respuestaJSON) => {
    if (respuestaJSON.ofreceProductos && respuestaJSON.productos.length > 0) {
      console.log(respuestaJSON)
      setMessages((prevMessages) => [...prevMessages, { productos: respuestaJSON.productos, sender: "bot", ofrece: true }]);
      setMessages((prevMessages) => [...prevMessages, { text: respuestaJSON.respuesta, sender: "bot", ofrece: false }]);
    } else {
      setMessages((prevMessages) => [...prevMessages, { text: respuestaJSON.respuesta, sender: "bot", ofrece: false }]);
    }
  };

  const handleUploadImage = (e) => {
    empezarCarga();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrlTemp = URL.createObjectURL(file);
      setImage(file);
      setImageUrl(imageUrlTemp);
      setImagePreviewVisible(true); // Mostrar popover temporalmente
      setTimeout(() => {
        setImagePreviewVisible(false);
      }, 3000);
    }
    terminoCarga();
  };
  
  const handleClickUploadImage = () => {
    document.getElementById('ImageInput').click();
  };

  const handleSend = async () => {
    console.log("image")
    console.log(image)
    console.log("input")
    console.log(input)
    if (input.trim() || image) {
      const currentInput = input;
      empezarCarga();
      setInput("");
      try {
        if (image){
          setMessages(prev => [
            ...prev,
            { text: "", sender: "user", src: imageUrl, typo: "image" },
            { text: currentInput, sender: "user", typo: "text" }
          ]);
          const responseJSON = await RequestImage(input, image);
          setImage(null);
          setImageUrl(null);
          handleRespuesta(responseJSON);
        }
        else {
          setMessages(prev => [...prev, { text: currentInput, sender: "user", typo: "text" }]);
          const responseJSON = await RequestTexto(input);
          handleRespuesta(responseJSON);
        }
        
      } catch (error) {
        console.error("Error en la solicitud:", error);
        setMessages((prevMessages) => [...prevMessages, { text: "Hubo un error al obtener la respuesta. Intenta nuevamente.", sender: "bot" }]);
      }
      terminoCarga();
    }
  };

  const startChat = () => {
    setMessages([{ text: 'Hola, en que te puedo ayudar 😊😊😊', sender: "bot", ofrece: false }]);
  };
  useEffect(() => startChat(), []);

  const scrollAutomatico = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => scrollAutomatico(), [messages]);



  const CargarJson = () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  };
  useEffect(() => CargarJson(), []);
  
  return (
    <div>
      <Button type="primary" onClick={toggleChat} style={{ position: "fixed", top: 20, right: 20 }}>Preguntale a Ebain AI</Button>
      <Drawer 
        // title="Ebain AI" 
        placement="right" onClose={toggleChat} width={530} open={visible}
        extra={<Space><Button onClick={toggleChat}>Cerrar</Button><Button type="primary" onClick={startChat}>Limpiar</Button></Space>}
        footer={
          <Input.Search 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onSearch={handleSend} 
            loading={loading} 
            enterButton={!loading ? "Enviar" : ""} 
            suffix={
              <Popover 
                content={
                  imageUrl && (
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
                      <Card style={{ width: "160px", borderRadius: "8px" }}>
                        <img src={imageUrl} alt="Vista previa" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                      </Card>
                    </div>
                  )
                } 
                title={!imageUrl ? "Sube una imagen" : null}
                open={imagePreviewVisible}
                onVisibleChange={(visible) => setImagePreviewVisible(visible)}
              >
                <input type="file" accept="image/*" id="ImageInput" style={{ display: 'none'}} onChange={handleUploadImage}/>
                <CameraOutlined style={{fontSize: '25px',cursor: 'pointer' }} onClick={handleClickUploadImage}/>
              </Popover>
              }
            size="large" 
            placeholder='Quiero un outfit de verano​ 😎​' 
            style={{ bottom: 20, width: '100%'}} 
            />
        }> 
        

        <List dataSource={messages} renderItem={(item) => (
          <List.Item style={{ display: "flex", justifyContent: item.sender === "user" ? "flex-end" : "flex-start" }}>
            
            {item.sender === "bot" ? 
              <img src={chat_bot_icon} className="chat_bot_icon" alt="Chat bot icon" /> 
              :
              null
            }
            {item.sender === "bot" ? 
              <div style={{ padding: "10px", borderRadius: "8px", background: item.sender === "user" ? "#1890ff" : "#f1f1f1", color: item.sender === "user" ? "white" : "black", maxWidth: "95%", wordBreak: "break-word", overflowWrap: "break-word", whiteSpace: "pre-wrap" }}>
                {item.ofrece ? (
                  <List grid={{ gutter: 16, column:2}} dataSource={item.productos} renderItem={(producto) => (
                      <Col justify="center">
                          <List.Item>
                              <Card title={producto.precio} style={{ width: 180, fontSize: "8px" }} extra={<a href={producto.linkRipley} target="_blank" rel="noopener noreferrer" style={{fontSize:"12px"}}>Ver en Ripley</a>}>
                                  <img src={producto.linkImagen} alt="Producto" style={{ width: "100%", height: "auto", cursor: "pointer" }} />
                                  <p style={{ fontSize: "12px" }}>Colores: {producto.colores}</p>
                                  <p style={{ fontSize: "12px" }}>Descuento: {producto.descuento}</p>
                              </Card>
                          </List.Item>
                      </Col>
                    )}>
                  </List> 
                ) : (item.text)}
              </div> :
              item.typo === "text" ? 
              <div style={{ padding: "10px", borderRadius: "8px", background: item.sender === "user" ? "#1890ff" : "#f1f1f1", color: item.sender === "user" ? "white" : "black", maxWidth: "95%", wordBreak: "break-word", overflowWrap: "break-word", whiteSpace: "pre-wrap" }}>
                {item.text}
              </div>
              :<Card style={{ width: "160px", borderRadius: "8px" }} >
                  <img src={item.src} alt="InputUsuario" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
               </Card> 
            }
            
          </List.Item>)}>
        </List>
        <div ref={messagesEndRef} />
      </Drawer>
    </div>
  );
};

export default Chatbot;
