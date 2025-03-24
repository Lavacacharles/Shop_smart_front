import React, { useState } from 'react';
import Navcaption from './navcaption';
import '../estilos/Navitems.css';

function Navbar() {
  const [ShowPanel, setShowPanel] = useState(false);

  const handleClick = () => {
    setShowPanel(!ShowPanel);
  };

  return (
    <div className='navitems_panel'>
      <button 
        className='navbutton' 
        onClick={handleClick}> 
        Navega aquí
      </button>
      {ShowPanel && <Navcaption />}
    </div>
  );
}

export default Navbar;
