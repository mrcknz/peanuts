import React, { Component } from 'react';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './components/DoableForm';
import ReviewSection from './components/ReviewSection';
import './App.css';

class App extends Component {

  state = {
    verticalSwipeProps: {}
  }

  componentDidMount () {
    this.setState(state => ({...state, verticalSwipeProps: { index: 0 } }));
  }

  render() {
    return (
      <SwipeableView axis="y" containerStyle={{height: '100vh'}} {...this.state.verticalSwipeProps}>
        <DoableForm type="quickEntry" />
        <ReviewSection />
      </SwipeableView>
    )
  }
}

export default App;
