import React, { Component } from 'react';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './components/DoableForm';
import ReviewSection from './components/ReviewSection';
import AreaSection from './components/AreaSection';

class App extends Component {

  state = {
    swipeable: true
  }

  swipeToggler = {
    enableSwiping: () => this.setState({...this.state, swipeable: true}),
    disableSwiping: () => this.setState({...this.state, swipeable: false})
  }

  render() {
    return (
      <SwipeableView axis="y" containerStyle={{height: '100vh'}} disabled={!this.state.swipeable}>
        <DoableForm quickEntry autofocus />
        <ReviewSection />
        <AreaSection disabled={!this.state.swipeable} swipeToggler={this.swipeToggler} />
      </SwipeableView>
    );
  }
}

export default App;
