import React from 'react';
import { Anchor } from 'antd';
import PaginaPrincipal from './pagina_principal';

const Navigation_products = () => (
  <>
    <div
      style={{
        position: 'fixed',
        top:70,
        // padding: '10px',
        zIndex: 20,
        width: '100%',
        backgroundColor: 'white'
        // marginTop: 70
      }}
    >
      {/* <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Camisas',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Zapatillas',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Shorts',
          },
        ]}
      /> */}

    </div>
    <div>
      <div
        id="part-1"
      />
      <PaginaPrincipal file_json={"camisa.json"}/>
      <div
        id="part-2"
      />
      <PaginaPrincipal file_json={"zapatillas.json"}/>
      <div
        id="part-3"
      />
      <PaginaPrincipal file_json={"shorts.json"}/>
    </div>
  </>
);


export default Navigation_products;