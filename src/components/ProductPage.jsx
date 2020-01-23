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

  useEffect(() => {
    fetchData(getId());
  }, [productId]);

  if (error) return (<h1>Product not found!</h1>);

  return (
    <div>
      <img src={data.img_url} alt="placeholder" style={{ width: '100%' }} />
      <p>{data.rating}</p>
      <h6>{data.title}</h6>
      <p>{data.note}</p>
      <h5>{data.price / 100}</h5>
      <button type="button">Add to Cart</button>
      <p>{data.description}</p>
      <p>{data.shiptime_days}</p>
      <p>{data.location}</p>
    </div>
  );
};


export default ProductPage;
