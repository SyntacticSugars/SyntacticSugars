/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const App = () => {

  const [modalState , setModalState ] = useState("none");
  const headerOptions = ['biscotti','bread' ,'brownies', 'cakes', 'cookies', 'cupcakes', 'pastries','pies']
  const headersRoutes =[];
  const headers = [];
  const Title = styled.h1`
    font-size: 1.75em;
    text-align: center;
    color: palevioletred;
  `;
  const LinkTitle = styled.p`
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
   console.log("modalState",modalState)

  for(let i = 0; i < headerOptions.length; i++){
    headersRoutes.push(<Route path={`/${headerOptions[i]}`}><h1>{headerOptions[i]}</h1></Route>)
    headers.push(<Link to={`/${headerOptions[i]}`} ><LinkTitle>{headerOptions[i]}</LinkTitle></Link>)
  }
 
  return(
  <div>
      <Title>
        <img onClick={()=>{setModalState("flex")}} style={{width: "20px", paddingRight: "2%"}} src="../assets/hamburger_icon.png"/>SyntacticSugars
      </Title>
      <Router>
      <MinHeader>
        {headers}
      </MinHeader>
        {headersRoutes}
    </Router>
  </div>
  )
}


export default App;
