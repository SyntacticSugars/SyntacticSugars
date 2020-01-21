import React from 'react';

const ThumbnailButton = (props) => (

  <div className="box" id="thumbnail" onClick="product page route placeholder">
    <image src={props.url}> image goes here </image>
    <span id="itemName">{props.itemName}</span>
    <p>
      <span className="itemProducer">{props.itemProducer}</span>
      <span className="itemStars">{props.itemStars}</span>
      <span className="itemPice">{props.itemPrice}</span>
      <span className="itemFreeShipping">{props.itemFreeShipping}</span>
    </p>
  </div>
);

export default ThumbnailButton;
