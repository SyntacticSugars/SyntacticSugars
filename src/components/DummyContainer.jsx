import React from 'react';
import DummyComponent from './DummyComponent.jsx';
import styled from 'styled-components';


const DummyContainer = (props) => {
    const {title} = props;
    const AppLayout = styled.div`
      display: grid;
      font-size: 1.5em;
      text-align: center;
      grid-template-rows: 1fr;
      place-items: center;
      margin:0;`

    return (
        <div>
          <br/>
            <h1>
            {title}
            </h1>
        <AppLayout>
          <DummyComponent/>
          <DummyComponent/>
          <DummyComponent/>
          <DummyComponent/>
          <DummyComponent/>
        </AppLayout>
        </div>
        )
}
export default DummyContainer;