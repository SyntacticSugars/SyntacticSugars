/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import DummyContainer from './DummyContainer.jsx';
import CreateProduct from './CreateProduct.jsx';
import ProductPage from './ProductPage.jsx';

const App = () => {
  const [modalState , setModalState ] = useState("none");
  const [loginState , setLoginState ] = useState(false);
  const [addProductState , setAddProductState ] = useState(false);
  const [ usernameState, setusernameState ] = useState('none');
  const [ thumbnailState, setthumbnailState ] = useState('none');

  function authGoogle() {
    fetch('/auth/google', {
      mode: 'no-cors'
    })
    .then((res) => {
      console.log(res.json())
      setLoginState(true)
    })
  }
  function logout() {
    fetch('/logout')
    .then(() => {
      setLoginState(false);
      setAddProductState(false);
      setModalState("none");
    })
  }

  const headerOptions = ['Biscotti','Bread' ,'Brownies', 'Cakes', 'Cookies', 'Cupcakes', 'Pastries','Pies']
  const headersRoutes =[];
  const headers = [];
  const Title = styled.div`
    font-size: 1.75em;
    text-align: center;
    color: palevioletred;
    @media (max-width: 580px) {
    display: flex;
    align-items: center;
    }
  `;
  const LinkTitle = styled.div`
    margin: 2%;
    padding: 0px;
    font-size: 1em;
    text-align: center;
    color: lightpurple;
  `;
  const MinHeader = styled.div`
    display: flex;  
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    @media (max-width: 580px) {
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      display: ${modalState};
   }
  `;

  const HamburgerToggle = styled.div`
    display: none;
    @media (max-width: 580px) {
      display: flex; 
      width: 25%;
      margin: 0px;
    }
  `;

  headersRoutes.push(<Route exact={true} path={`/`}>{!addProductState ? <img id="background" style={{width: '100%'}}src ="../assets/homepage-background.jpeg"/>: <CreateProduct change={addProductState , setAddProductState} />}</Route>)

  for (let i = 0; i < headerOptions.length; i++) {
    headersRoutes.push(<Route path={`/${headerOptions[i]}`}><DummyContainer title={headerOptions[i]} /></Route>);
    headers.push(<Link style={{ textDecoration: 'none' }} to={`/${headerOptions[i]}`}><LinkTitle>{headerOptions[i]}</LinkTitle></Link>);
  }

  return (
    <div style={{ margin: '5px' }}
    ><Router>
      <Title>
        <HamburgerToggle>
          <img onClick={() => { setModalState(modalState === 'none' ? 'flex' : 'none'); }} style={{ height: '20px' }} src="../assets/hamburger_icon.png" />
        </HamburgerToggle>
        <Link to="/" style={{textDecoration:"none",color: "palevioletred"}}> SyntacticSugars</Link>
      
        {!loginState ? <button onClick={()=>{authGoogle()}} style={{alignItems: "center"}}><img src='https://blog.octo.com/wp-content/uploads/2018/09/signin.png'></img></button> 
       :<button onClick={()=>{logout()}} style={{marginLeft: "10px", fontSize: "12px", alignItems: "center"}}>Logout</button> }

       {loginState ? <button onClick={()=>{setAddProductState(true)}} style={{marginLeft: "10px", fontSize: "12px", alignItems: "center"}}>Add Product</button>:null} 
    
      </Title>
      
      {!addProductState ? <MinHeader>
        {headers}
      </MinHeader>:null}
        {headersRoutes}
        <Route path="/product/*">
          <ProductPage />
        </Route>
      </Router>
    </div>
  );
};

export default App;
