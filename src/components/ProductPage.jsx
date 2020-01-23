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
`;

  const ImageDiv = styled.div`
    width: 25%;
    margin-right: 10px;
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
      <div>
      <p>{data.rating}</p>
      <h3>{data.title}</h3>
      <p>Note to Customer: {data.note}</p>
      <h4>Price: {data.price / 100}</h4>
      <button type="button">Add to Cart</button>
      <h4>Description: {data.description}</h4>
      <h4># of Days to Ship: {data.shiptime_days}</h4>
      <h4>Location: {data.location}</h4>
      </div>
    </ProductDiv>
  );
};


export default ProductPage;
