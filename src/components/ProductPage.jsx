import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const ProductPage = (props) => {
  const [data, setData] = useState({}); // product data
  const [error, setError] = useState(false); // if error display error message
  const [productId, setId] = useState(0); // to stop infinite rerenders

  // gets product id # from url
  const getId = () => {
    const url = window.location.href;
    const index = url.lastIndexOf('/');
    const id = url.substring(index + 1);
    setId(id);
    return id;
  };

  // fetches product data from server according to id #
  function fetchData(id) {
    fetch(`/server/product/${id}`, {
      method: 'GET',
    })
      .then((info) => info.json())
      .then((info) => setData(info.product))
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }

  const ProductDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  @media (max-width: 580px) {
    flex-direction: column;
    
  }
`;

  const ImageDiv = styled.div`
    width: 25%;
    margin-right: 20px;
  `;
  const ProductInfoDiv = styled.div`
    align-self: flex-start;
  `;

  useEffect(() => {
    fetchData(getId());
  }, [productId]);

  if (error) return (<h1>Product not found!</h1>);

  return (

    <ProductDiv>
      <ImageDiv>
        <img src={data.img_url} alt="placeholder" style={{ width: '100%', }} />
      </ImageDiv>
      <ProductInfoDiv>
        <h3>{data.title}</h3> 
        <p>{data.rating}</p>
        <p>Note to Customer: {data.note}</p>
        <p>Price: ${data.price / 100}</p>
        <p>Description: {data.description}</p>
        <p># of Days to Ship: {data.shiptime_days}</p>
        <p>Location: {data.location}</p>    
        <button type="button">Add to Cart</button>
      </ProductInfoDiv>
    </ProductDiv>


  );
};


export default ProductPage;
