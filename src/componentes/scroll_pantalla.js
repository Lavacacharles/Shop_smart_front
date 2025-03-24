import React from 'react';
import { Carousel } from 'antd';
import '../App.css'

const ScrollPantalla = () => {
    const sourceLinks = [
        "https://images.prismic.io/ripley-cms/ZzFKMa8jQArT0qhc_pe-desk-sl1-bth-moda-111124.webp?auto=format,compress&rect=0,1,2800,951&w=1920&h=652",
        "https://images.prismic.io/ripley-cms/Zy2GMa8jQArT0jkg_pe-desk-sl6-cw-linea-blanca-081124.webp?auto=format,compress&rect=0,1,2800,951&w=1920&h=652",
        "https://simple.ripley.com.pe/home/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fripley-cms%2FZy5Spq8jQArT0pbr_pe-desk-sl8-bth-computacion-081124.webp%3Fauto%3Dformat%2Ccompress%26rect%3D0%2C1%2C2800%2C951%26w%3D1920%26h%3D652&w=3840&q=75",
        "https://images.prismic.io/ripley-cms/ZzFKcK8jQArT0qhe_pe-desk-sl3-bth-zapatillas-111124.webp?auto=format,compress&rect=0,1,2800,951&w=1920&h=652"
        // "https://simple.ripley.com.pe/belleza/perfumes/duty-free",
        // "https://simple.ripley.com.pe/electrohogar/linea-blanca/ver-todo",
        // "https://images.prismic.io/ripley-cms/Zy2GSK8jQArT0jk4_pe-desk-sl7-bth-dormitorio-081124.webp?auto=format,compress&rect=0,1,2800,951&w=1920&h=652",
        // "https://simple.ripley.com.pe/calzado/zapatillas/urbanas?s=mdco",
    ]
    return (
        <div
        className='scroll_pantalla'>

        <Carousel
          autoplay={true}
          autoplaySpeed={2000}
          draggable={true}
          adaptiveHeight={true}
        >
          {sourceLinks.map((link, index) => (
            <div key={index}>
              <img src={link} alt='imagen_principal' style={{ width: '100%' }} />
            </div>
          ))}
        </Carousel>
        </div>
      );
};
export default ScrollPantalla;