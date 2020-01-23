import React from 'react';
import styled from 'styled-components';

const CreateProduct = (props) => {

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

    <button onClick={() => { 
        const data= [];
        data.push(Number(document.getElementById('posterId').value));
        data.push(document.getElementById('title').value);
        data.push(document.getElementById('productType').value);
        data.push(document.getElementById('image_url').value);
        data.push(Number(document.getElementById('price').value) * 100);
        data.push(document.getElementById('description').value);
        data.push(document.getElementById('location').value);
        data.push(Number(document.getElementById('shippingTime').value));
        data.push(document.getElementById('note').value);

        fetch( "/server/product/post", {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data),
            
        }).then(response => response.json()).then(data => {console.log("we got data back",data)}).catch((err)=>console.log("happy dance" + err))

    }}>
     Submit
    </button>
    </div>
    </CreateProductBox>
    );
};

export default CreateProduct;