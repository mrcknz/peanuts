import React from 'react';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './components/DoableForm';
import ReviewSection from './components/ReviewSection';

function App () {

  return (
    <SwipeableView axis="y" containerStyle={{height: '100vh'}}>
      <DoableForm type="quickEntry" autofocus />
      <ReviewSection />
    </SwipeableView>
  )
}

export default App
