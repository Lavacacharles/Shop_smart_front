import '../App.css'; 
import zapatilla_1 from '../imagenes/zapatilla_1.png'
import zapatilla_2 from '../imagenes/zapatilla_2.png'
import zapatilla_3 from '../imagenes/zapatilla_3.png'
const PaginaPrincipal = () => {
    return(
        <div className='productos_container'>
            <img src={zapatilla_1} className="producto_icon" />
            <img src={zapatilla_2} className="producto_icon" />
            <img src={zapatilla_3} className="producto_icon" />
        </div>
    );
};

export default PaginaPrincipal;

