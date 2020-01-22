import React from 'react';
import styled from 'styled-components';
import ThumbnailButton from './ThumbnailButton.jsx';
// import DummyComponent from './DummyComponent.jsx';


const DummyContainer = (props) => {
  const { title } = props;
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


  const fakeData = {
    url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg',
    itemName: 'fakeName',
    itemProducer: 'fakeProducer',
    itemStars: '4/5',
    itemPrice: 'cheap',
    itemNote: 'some note',
  };

  return (
    <div>
      <br />
      <h1 style={{ margin: '10px' }}>
        {title}
      </h1>
      <AppLayout>
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
        <ThumbnailButton data={fakeData} />
      </AppLayout>
    </div>
  );
};
export default DummyContainer;
