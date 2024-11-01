import Barra_lateral from './componentes/barra_lateral';
import './App.css'; 
// import PaginaPrincipal from './componentes/pagina_principal';
import Buscador from './componentes/buscador.';
import Fondo from './imagenes/fondo_ripley.jpg'
import Logo from './imagenes/ripley_logo.png'
function App() {
  return (
    <body className='body_master'>
    <header className="header_dinamico">
      <img src={Logo} className='header_logo'></img>
      <p className='header_texto'>Compra en Ripley!</p>
      <Buscador className='Buscador_container'></Buscador>
      <Barra_lateral className="Barra_lateral"></Barra_lateral>

    </header>
    <div className="PaginaPrincipal">
      <img src={Fondo} className='Fondo'></img>
      {/* <PaginaPrincipal></PaginaPrincipal> */}
    </div>
    </body>
  );
}

export default App;


