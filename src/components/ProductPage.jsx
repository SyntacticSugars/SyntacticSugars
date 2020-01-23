import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const ProductPage = (props) => {
  const Name = styled.h1`
  font-size: 2em;
  color: palevioletred;
  `;
  const Image = styled.img`
  max-width: 100%;
  `;

  const Text = styled.p`
  font-size: 1.5em;
  color: darkgrey;
  margin: .5em 0;
  `;

  const Price = styled.p`
  font-size: 1em;
  color: black;
  font-weight: 600;
  margin: 0;
  `;
  const Note = styled.p`
  font-size: .75em;
  color: black;
  border-style: solid;
  background-color: palegreen;
  border-color: palegreen;
  border-radius: .5em;
  text-align: center;
  display: inline-block;
  padding: .1em;
  margin: 0;
  `;

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
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ padding: '1.5em', margin: 'auto', width: '90%' }}>
        <Image src={data.img_url} alt="" />
        <Text>{data.rating}</Text>
        <Name>{data.title}</Name>
        <Note>{data.note}</Note>
        <Price>{`Price: $${data.price / 100}`}</Price>
        <button type="button">Add to Cart</button>
        <Text>{`Description: ${data.description}`}</Text>
        <Text>{`Shipping time: ${data.shiptime_days} days`}</Text>
        <Text>{`Location: ${data.location}`}</Text>
      </div>
    </div>
  );
};


export default ProductPage;
