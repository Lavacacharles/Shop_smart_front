import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chatbot from './componentes/chatbot';
import Buscador from './componentes/buscador';
import Logo from './imagenes/ripley_logo.png';
import Navbar from './componentes/navItems';
import ScrollPantalla from './componentes/scroll_pantalla';
import PaginaPrincipal from './componentes/pagina_principal';
import './App.css'; 

function App() {
  // const jsonInfo = [ "camisa.json", "shorts.json", "camisa.json"]

  return (
    <Router>
          <header className="header_dinamico">
                <Link to="/">
                  <img src={Logo} className='header_logo' alt="Ripley Logo" />
                </Link>
                <Navbar />
                <p        className='header_texto'>Compra en Ripley!</p>
                <Buscador className='Buscador_container'/>
                <Chatbot  className="Barra_lateral"/>
          </header>
          <Routes>
                <Route path="/" element={<ScrollPantalla />} />
                <Route path="/zapatillas" element={<PaginaPrincipal file_json='zapatillas.json'/>} />
                <Route path="/camisas" element={<PaginaPrincipal file_json='camisa.json'/>} />
                <Route path="/shorts" element={<PaginaPrincipal file_json='shorts.json'/>} />
          </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <>
//     <header className="header_dinamico">
//       <a href='https://simple.ripley.com.pe'>
//         <img src={Logo} className='header_logo' ></img>
//       </a>
//       <Navbar></Navbar>
//       <p className='header_texto'>Compra en Ripley!</p>
//       <Buscador className='Buscador_container'/>
//       <Barra_lateral className="Barra_lateral"/>
//     </header>
    
//       <Scroll_pantalla/>
//       {/* <Navigation_products className="Navigation_bar"/> */}
//     </>
//     // </body>
//   );
// }

// export default App;


