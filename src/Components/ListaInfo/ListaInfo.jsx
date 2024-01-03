import React from 'react';

const ListaInfo = ({ data }) => {
  return (
    <ul className='lista'>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListaInfo;