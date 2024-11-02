import React, { useEffect, useState } from 'react';
import { Button, Drawer, Space} from 'antd';
import Chat_bot_mensaje from './chat_mensaje';
import { AutoComplete } from 'antd';
import ImageInput from './image_input';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Barra_lateral = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const [TextoUsuario, setTextoUsuario] = useState("");
  const [TextoShow, setTextoShow] = useState("");  
  const [Chat_bot_enviar_al_bot, setChat_bot_enviar_al_bot] = useState(false)
  const [vaciarComponentes, setVaciarComponentes] = useState(false);

  const handleEnviarMensaje = async () => {
    setTextoShow("")
    setChat_bot_enviar_al_bot(!Chat_bot_enviar_al_bot);
    await delay(1000)
    setTextoUsuario("")
  }
  
  const handleInputChange = (value) => {
    setTextoUsuario(value);
    setTextoShow(value)
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

  const handleCamera =() => {
    console.log("camera")
  }
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

        <AutoComplete
          style={{
            width: 200,
          }}
          options={options}
          placeholder="Que te gustaria :)"
          value={TextoShow}
          onChange={handleInputChange}    
          onSearch={handleInputChange}    
          onSelect={handleInputChange}    
          
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />

          <button 
            className='chat_bot_botton_enviar_mensaje_usuario' 
            onClick={handleEnviarMensaje}>
              Enviar Mensaje
          </button> 

          <ImageInput handleCamera={handleCamera}></ImageInput>
        </footer>
      </Drawer>
    </>
  );
};
export default Barra_lateral;


const options = [
  {
    value: 'Busco zapatillas',
  },
  {
    value: 'Quiero encontrar mis zapatillas',
  },
  {
    value: 'Recomiendame zapatillas',
  },
];

{/* <input 
type='text' 
value={TextoUsuario} 
onChange={handleInputChange}
className='chat_bot_base_text_input'
/> */}