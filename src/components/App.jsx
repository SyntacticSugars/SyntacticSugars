/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ThumbnailButton from './ThumbnailButton.jsx';

class App extends Component {
  // renders a button and a boolean; the button flips the boolean
  render() {
    const fakeData = {
      url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A0996.jpg',
      itemName: 'fakeName',
      itemProducer: 'fakeProducer',
      itemStars: '4/5',
      itemPrice: 'cheap',
      itemNote: 'some note',
    };
    return (<ThumbnailButton data={fakeData} />);
  }
}


export default App;
