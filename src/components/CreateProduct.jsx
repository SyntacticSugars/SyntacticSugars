import React from 'react';
import styled from 'styled-components';

const CreateProduct = () => {
    //poster_id
    // title VARCHAR (64) NOT NULL,
    // type VARCHAR (16) NOT NULL,
    // img_url VARCHAR (128) NOT NULL,
    // description VARCHAR (512),
    // price INTEGER NOT NULL,
    // rating INTEGER,
    // shiptime_days INTEGER,
    // location VARCHAR (124),
    // note VARCHAR (24),

    const CreateProductBox = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    background-color: #D7E6F5;
    @media (max-width: 580px) {
      ${'' /* width: 50%; */}
   }`;
return (
    <CreateProductBox>
    <div>
    <label>Poster ID</label>
    <input id="posterId"></input> 
    <br/>
    <br/>
    <label>Product Name</label>
    <input id="title"></input>
    <br/>
    <br/>
    <label>Product type</label>
    <input id="productType"></input>
    <br/>
    <br/>
    <label>Image url</label>
    <input id="image_url"></input>
    <br/>
    <br/>
   <label>Product Description</label>
    <input id="description"></input>
    <br/>
    <br/>
    <label>Price of Product</label>
    <input id="price"></input>
    <br/>
    <br/>
     <label>How long does it take to ship?</label>
    <input id="shippingTime"></input>
    <br/>
    <br/>
    <label>Location</label>
    <input id="location"></input>
    <br/>
    <br/>
    <label>Note</label>
    <input id="note"></input>
    <br/>
    <br/>

    <button onClick={() => { }}>
     Sumbit
    </button>
    </div>
    </CreateProductBox>
    );
};

export default CreateProduct;