import { useState, useEffect } from 'react';
import ImagePortada from './imagen_portada';
import '../App.css'; 
// import zapatilla_1 from '../imagenes/zapatilla_1.png'
// import zapatilla_2 from '../imagenes/zapatilla_2.png'
// import zapatilla_3 from '../imagenes/zapatilla_3.png'


const PaginaPrincipal = () => {
    const [ListaImagenes, setListaImagenes] = useState([])
    const [links, setLinks] = useState([]);
  
    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch('camisa.json'); 
                const data = await response.json();
                setLinks(data.slice(0, 10));
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        };
        fetchLinks();
    }, []); 
  
    return(
        <div className="PaginaPrincipal">
            {links.map(link => (
                <ImagePortada link={link.link} nombre={link.nombres}/>
            ))}
        </div>
    );
};

export default PaginaPrincipal;

