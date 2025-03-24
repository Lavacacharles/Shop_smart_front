import React from 'react';
import { Image } from 'antd';
import { Card } from 'antd';
import '../App.css'

const { Meta } = Card;

const ImagePortada = (props) => {
    return(
        <Card
            hoverable
            className='portada_card'
            cover={
                <Image
                    width={240}
                    src={props.link}
                />
            }
        >
        <a href={props.link_producto}>
            <Meta 
                className='portada_card_texto' 
                //   title={props.nombre} 
                description={props.nombre}
            
            />
        </a>
        <p className='portada_card_precio'>{props.precio}</p>
        </Card>
    )
};

export default ImagePortada;


