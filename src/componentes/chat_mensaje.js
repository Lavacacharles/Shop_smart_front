import React, { useState, useEffect } from 'react';
import chat_bot_icon from '../imagenes/chat_bot_icon.jpg';
import '../App.css';
import { AutoComplete, Input } from 'antd';

const optionsTexto = [
  {
    value: 'Hola, en que te puedo ayudar 😊😊😊',
  },
  {
    value: 'Claro, que te parecen estos ...😎',
  },
  {
    value: 'Encontre estas, te gustan?',
  },
  {
    value: 'Están se ajustan a lo buscas...',
  },
];

const Chat_bot_mensaje = ({ LimpiarMensajes, inputUsuario, enviarInput }) => {
  const [Lista_mensajes, setLista_mensajes] = useState([
    <div className='chat_bot_container_mensaje' key={0}>
      <div className='chat_bot_container_icon'>  
        <img src={chat_bot_icon} className='chat_bot_icon'/>
      </div>
      <div className='chat_bot_mensaje'>
        {optionsTexto[0].value}    
      </div>
    </div>        
  ]);
  const [NumeroMensajes, setNumeroMensajes] = useState(0);
  const [IdxMensaje, setIdxMensaje] = useState(0)
  useEffect(() => {
    if (inputUsuario) {
      let currentIndex = IdxMensaje + 1; 
      setNumeroMensajes(NumeroMensajes + 1)
      agregarMensaje(inputUsuario)
      respuestaBot(currentIndex); // Pasa el índice actual
    }
  }, [enviarInput]); 

  useEffect(() => { 
    setLista_mensajes([
      <div className='chat_bot_container_mensaje' key={0}>
        <div className='chat_bot_container_icon'>  
          <img src={chat_bot_icon} className='chat_bot_icon'/>
        </div>
        <div className='chat_bot_mensaje'>
          Hola, en que te puedo ayudar 😊😊😊
        </div>
      </div>   
    ]);
  }, [LimpiarMensajes]);

  const agregarMensaje = (nuevoMensaje) => {
    setLista_mensajes((prevLista) => [
      ...prevLista,
      <div className='chat_bot_container_usuario_mensaje' key={NumeroMensajes}>
        <div className='chat_bot_usuario_mensaje'>
          {nuevoMensaje} 
        </div>
      </div>  
    ]);
    setNumeroMensajes(NumeroMensajes + 1); 
    // respuestaBot(NumeroMensajes);
  };

  const respuestaBot = (currentIndex) => {
    setLista_mensajes((prevLista) => [
      ...prevLista,
      <div className='chat_bot_container_mensaje' key={currentIndex }>
        <div className='chat_bot_container_icon'>  
          <img src={chat_bot_icon} className='chat_bot_icon'/>
        </div>

        <div className='chat_bot_mensaje'>
          {optionsTexto[currentIndex].value}
        </div>
      </div>   
    ]);
    if(IdxMensaje + 1 != 3){
      setIdxMensaje(IdxMensaje + 1)
    }
    else{
      setIdxMensaje(1)
    }
    setNumeroMensajes(NumeroMensajes + 1); 
  };

  return (
    <div className='chat_bot_buzon_mensajes'>
      {Lista_mensajes}
    </div>
  );
};

export default Chat_bot_mensaje;
