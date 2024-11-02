import React from 'react';
import Barra_lateral from './componentes/barra_lateral';
import Buscador from './componentes/buscador';
import Navigation_products from './componentes/navigation_products';
import Logo from './imagenes/ripley_logo.png'
import './App.css'; 

function App() {
  return (
    <body className='body_master'>
    <header className="header_dinamico">
      <img src={Logo} className='header_logo'></img>
      <p className='header_texto'>Compra en Ripley!</p>
      <Buscador className='Buscador_container'></Buscador>
      <Barra_lateral className="Barra_lateral"></Barra_lateral>

    </header>
      <Navigation_products className="Navigation_bar"/>
    </body>
  );
}

export default App;


