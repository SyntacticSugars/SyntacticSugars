import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbnailButton from './ThumbnailButton.jsx';
// import DummyComponent from './DummyComponent.jsx';


const FeedContainer = (props) => {
  const { title } = props;

  const [data, setData] = useState([]); // product data
  const [error, setError] = useState(false); // if error display error message

  const AppLayout = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin: 8px;
      @media (max-width: 580px) {
        display: flex;
        flex-wrap: wrap;
        font-size: 1.5em;
        text-align: center;
        place-items: center;
        margin:0}`;

  function fetchData() {
    fetch(`/server/feed/${title}`, {
      method: 'GET',
    })
      .then((info) => info.json())
      .then((info) => setData(info.feed))
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, data);

  function makeButtons() {
    const components = [];
    data.forEach((el) => {
      components.push(<ThumbnailButton data={el} />);
    });
    return components;
  }

  if (error) return (<h1>Product not found!</h1>);

  return (
    <div>
      <br />
      <h1 style={{ margin: '10px' }}>
        {title}
      </h1>
      <AppLayout>
        {makeButtons()}
      </AppLayout>
    </div>
  );
};
export default FeedContainer;
