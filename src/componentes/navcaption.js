import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import '../estilos/Navitems.css';

const itemsNav = [
  { objeto: "Zapatillas", source: "/zapatillas" },
  { objeto: "Camisas", source: "/camisas" },
  { objeto: "Shorts", source: "/shorts" },
];

const Navcaption = () => {
  return (
    <div className="navlist"> 
      <List
        itemLayout="horizontal"
        dataSource={itemsNav}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link to={item.source} className='navtext'>{item.objeto}</Link>
              }
              // description={<a href={item.source}>Fuente: {item.source}</a>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Navcaption;
