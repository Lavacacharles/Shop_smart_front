import React, { useState, useEffect } from 'react';
// import { UserOutlined } from '@ant-design/icons';
// import { AutoComplete, Flex, Input } from 'antd';
import chat_bot_icon from '../imagenes/chat_bot_icon.jpg'
// import Chat_bot_envia_mensaje_usuario from './chat_bot_envia_mensaje_usuario';
import '../App.css'

const Chat_bot_mensaje = ({LimpiarMensajes, inputUsuario, enviarInput}) => {
    const [Lista_mensajes, setLista_mensajes] = useState([
        <div className='chat_bot_container_mensaje' key={1}>
            <div className='chat_bot_container_icon'>  
                <img src={chat_bot_icon} className='chat_bot_icon'/>
            </div>
            <div className='chat_bot_mensaje'>
                chat_bot_mensaje
            </div>
        </div>        
    ]);
    const [NumeroMensajes, setNumeroMensajes] = useState(1);

    useEffect(() => {
        if (inputUsuario) {
            respuestaBot(inputUsuario);
        }
    },[enviarInput]); 

    // useEffect(() => {
    //     setNumeroMensajes(NumeroMensajes + 1)
    //     if (NumeroMensajes > 1) {
    //         setNumeroMensajes(NumeroMensajes + 1)
    //         agregarMensaje(inputUsuario);
    //     }
    // }, [enviarInput]);

    useEffect(() => { 
        setLista_mensajes([
            <div className='chat_bot_container_mensaje' key={0}>
                <div className='chat_bot_container_icon'>  
                    <img src={chat_bot_icon} className='chat_bot_icon'/>
                </div>
                <div className='chat_bot_mensaje'>
                    chat_bot_mensaje
                </div>
            </div>   
        ])
    }, [LimpiarMensajes]);

    const agregarMensaje = (nuevoMensaje) => {
        setLista_mensajes((prevLista) => [
          ...prevLista,
            <div className='chat_bot_container_mensaje' key={NumeroMensajes}>
                <div className='chat_bot_container_icon'>  
                    <img src={chat_bot_icon} className='chat_bot_icon'/>
                </div>
                <div className='chat_bot_mensaje'>
                    {nuevoMensaje}
                </div>
            </div>   
        ]);
        setNumeroMensajes(NumeroMensajes + 1);
      };
    const respuestaBot = (nuevoMensaje) => {
        setLista_mensajes((prevLista) => [
            ...prevLista,
            <div className='chat_bot_container_usuario_mensaje' key={NumeroMensajes}>
                <div className='chat_bot_usuario_mensaje'>
                    {nuevoMensaje}
                </div>
            </div>  
          ]);
          setNumeroMensajes(NumeroMensajes + 1);

        //   logica para el chat bot
          agregarMensaje("Nuevo mensaje chat bot")
    }
  return (
    <div className='chat_bot_buzon_mensajes'>
        {Lista_mensajes}
    </div>


  );
};
export default Chat_bot_mensaje;
