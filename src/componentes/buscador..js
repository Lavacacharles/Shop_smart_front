import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Flex, Input } from 'antd';
import '../App.css'
const Title = (props) => (
    <Flex align="center" justify="space-between">
      {props.title}
      <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        more
      </a>
    </Flex>
  );
  const renderItem = (title, count) => ({
    value: title,
    label: (
      <Flex align="center" justify="space-between">
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </Flex>
    ),
  });
  const options = [
    {
      label: <Title title="Libraries" />,
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
      label: <Title title="Solutions" />,
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: <Title title="Articles" />,
      options: [renderItem('AntDesign design language', 100000)],
    },
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