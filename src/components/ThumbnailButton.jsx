import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ThumbnailButton = ({ data }) => {
  const Name = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
  margin: 2px 0;
  `;
  const Info = styled.p`
  font-size: 1em;
  color: darkgray;
  margin: 2px 0;
  `;
  const Price = styled.p`
  font-size: 1em;
  color: black;
  font-weight: 600;
  margin: 2px 0;
  `;
  const Note = styled.p`
  font-size: .75em;
  color: black;
  border-style: solid;
  background-color: palegreen;
  border-color: palegreen;
  border-radius: .5em;
  text-align: center;
  margin: 0;
  display: inline-block;
  padding: .1em;
  `;
  const Button = styled.button`
  padding: .5em;
  margin: .5em;
  background-color: gba(250,250,250);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, .3);  
  text-align: left;
  `;

  return (
    <Link to={`/product/${data.itemId}`}>
      <Button onClick={() => { console.log(data.itemId); }}>
        <img src={data.url} alt="placeholder" style={{ width: '78px' }} />
        <Name>{data.itemName}</Name>
        <Info>{data.itemProducer}</Info>
        <Info>{data.itemStars}</Info>
        <Price>{data.itemPrice}</Price>
        <Note>{data.itemNote}</Note>
      </Button>
    </Link>
  );
};

export default ThumbnailButton;
