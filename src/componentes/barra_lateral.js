import React, { useState } from 'react';
import { Button, Drawer, Space} from 'antd';
import Chat_bot_mensaje from './chat_mensaje';

const Barra_lateral = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const [TextoUsuario, setTextoUsuario] = useState("");
  const [Chat_bot_enviar_al_bot, setChat_bot_enviar_al_bot] = useState(false)
  const [vaciarComponentes, setVaciarComponentes] = useState(false);

  const handleEnviarMensaje = () => {
    setChat_bot_enviar_al_bot(!Chat_bot_enviar_al_bot);
  }
  
  const handleInputChange = (event) => {
    setTextoUsuario(event.target.value);
  };


  const showDrawer = () => {
    setOpen(true);
  };
  // const onChange = (e) => {
  //   setPlacement(e.target.value);
  // };
  const onClose = () => {
    setOpen(false);
  };

  const eliminarComponentes = () => {
    setVaciarComponentes(!vaciarComponentes);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer} className='Barra_lateral_boton'>
          Chat bot
        </Button>
      </Space>

      <Drawer
        title="Barra lateral"
        placement={placement}
        // style={}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button 
              onClick={onClose}>
                Cancel
            </Button>
            
            <Button 
              type="primary" 
              onClick={eliminarComponentes}>
                Clear
            </Button>
          </Space>
        }
      >
          <Chat_bot_mensaje 
            LimpiarMensajes={vaciarComponentes} 
            inputUsuario={TextoUsuario} 
            enviarInput={Chat_bot_enviar_al_bot}
            >  
          </Chat_bot_mensaje>

        <footer className='chat_bot_base'>
          <input 
            type='text' 
            value={TextoUsuario} 
            onChange={handleInputChange}
            className='chat_bot_base_text_input'
          />
          <button 
            className='chat_bot_botton_enviar_mensaje_usuario' 
            onClick={handleEnviarMensaje}>
              Enviar Mensaje
          </button> 
          {/* <CameraOutlined /> */}
        </footer>
      </Drawer>
    </>
  );
};
export default Barra_lateral;