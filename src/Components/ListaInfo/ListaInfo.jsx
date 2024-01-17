/* eslint-disable react/prop-types */

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