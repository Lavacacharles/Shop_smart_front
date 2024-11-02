import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Flex, Input } from 'antd';
import '../App.css'
  
const Title = (props) => (
  <Flex align="center" justify="space-between">
    {props.title}
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      More
    </a>
  </Flex>
);

const renderItem = (title, count, link) => ({
  value: title,
  label: (
    <Flex align="center" justify="space-between" className='Buscador_container_link'>
      <a 
        className='Buscador_link'
        href={link} 
        target="_blank" 
        rel="noopener noreferrer">
        {title}
      </a>
      <span>
        <UserOutlined /> {count}
      </span>
    </Flex>
  ),
});
const options = [
  {
    label: 
      <Title 
        title="Polos" 
        link="https://simple.ripley.com.pe/hombre/ropa-hombre/polos?s=mdco"
      />,
    options: [
      renderItem(
        'POLO ALGODÓN HOMBRE WOALLANCE BASICO', 
        10000,
        'https://simple.ripley.com.pe/polo-algodon-hombre-woallance-basico-2016306030045?ismb=true&mai=v2_xx3L_2AEDUDkb72iYRxLUDcM-Z-qM1Ro8a7DXPfuWYNTyWkmuwhC8lOhKd6VFLyXOBPymSDUMXKE4a8i3WmvnnLVHh-V6zrpHBEZpyt_-XCXJlnW8rxfjH0Y8VQHEuo2frKs0ctr6cDPyYU_2kj_jy7n6P4umOcsJ6VDeBjtnlo%3D_ark192e9a46d0c934bfbc&color_80=blanco&s=mdco'
      )],
  },
  {
    label: 
    <Title 
      title="Camisas" 
      link="https://simple.ripley.com.pe/hombre/ropa-hombre/camisas?source=search&term=camisas&s=mdco"
    />,
    options: [
      renderItem(
        'CAMISA MANGA LARGA ALGODÓN HOMBRE MAUI AND SONS', 
        10000,
        'https://simple.ripley.com.pe/camisa-manga-larga-algodon-hombre-maui-and-sons-2016345852622?color_80=multicolor&s=mdco'
      )],
  },
  {
    label: 
      <Title 
        title="Zapatillas" 
        link="https://simple.ripley.com.pe/calzado/marcas-zapatillas/ver-todo?s=mdco"
      />,
    options: [
      renderItem(
        'ZAPATILLAS MUJER PUMA URBANAS BLANCO LILY PLATFORM L WNS', 
        60100,
        "https://simple.ripley.com.pe/zapatillas-mujer-puma-urbanas-blanco-lily-platform-l-wns-2026331148387?color_80=blanco&talla_calzado_faceta=385&s=mdco"
      )],
  } 
];
const Buscador = () => (
  <div className='Buscador'>
      <AutoComplete
          popupClassName="certain-category-search-dropdown"
          popupMatchSelectWidth={500}
          style={{
              width: 600,
          }}
          options={options}
          size="large"
          >
          <Input.Search size="large" placeholder="input here" />
      </AutoComplete>
  </div>
);

  export default Buscador;