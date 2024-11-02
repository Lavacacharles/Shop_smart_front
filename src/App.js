import Barra_lateral from './componentes/barra_lateral';
import './App.css'; 
import PaginaPrincipal from './componentes/pagina_principal';
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

      {/* <img src={Fondo} className='Fondo'></img> */}
      {/* <img 
        className="test_and_component" 
        alt="Image" 
        src="https://images.prismic.io/ripley-cms/ZyARVK8jQArTz6z8_pe-desk-sl3-appfest-zapatillas-281024.jpg?auto=format,compress&rect=0,1,2800,951&w=1920&h=652"
      /> */}
      <PaginaPrincipal></PaginaPrincipal>

    </body>
  );
}

export default App;


