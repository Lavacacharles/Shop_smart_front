import React from 'react';
import { useState, useEffect } from 'react';
import ImagePortada from './imagen_portada';
import '../App.css'; 
const PaginaPrincipal = (props) => {
    const [links, setLinks] = useState([]);
  
    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch(props.file_json); 
                const data = await response.json();
                setLinks(data.slice(0, 10));
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        };
        fetchLinks();
    }, [props.file_json]); 
  
    return(
        <div className="PaginaPrincipal">
            {links.map(link => (
                <ImagePortada link={link.link} nombre={link.nombres} precio={link.precios}/>
            ))}
        </div>
    );
};

export default PaginaPrincipal;

