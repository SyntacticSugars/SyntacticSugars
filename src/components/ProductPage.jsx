import React from 'react';
import styled from 'styled-components';


const ProductPage = (props) => {
  // const data = {};
  const data = {
    img_url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg',
    id: 1,
    title: 'fakeName',
    type: 'Pies',
    poster_id: 2,
    rating: 4,
    price: 'cheap',
    note: 'some note',
    description: 'apple',
    location: 'NYC',
    shiptime_days: 5,
  };
  return (
    <div>
      <img src={data.img_url} alt="placeholder" style={{ width: '100%' }} />
      <p>{data.rating}</p>
      <h6>{data.title}</h6>
      <p>{data.note}</p>
      <h5>{data.price}</h5>
      <button type="button">Add to Cart</button>
      <p>{data.description}</p>
      <p>{data.shiptime_days}</p>
      <p>{data.location}</p>
    </div>
  );
};


export default ProductPage;
