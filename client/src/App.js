import React, { Component } from 'react';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './components/DoableForm';
import ReviewSection from './components/ReviewSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <SwipeableView axis="y" containerStyle={{height: '100vh'}} >
        <DoableForm type="quickEntry" />
        <ReviewSection />
      </SwipeableView>
    );
  }
}

export default App;
