import React, { Component } from 'react';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './components/DoableForm';
import ReviewSection from './components/ReviewSection';

function App () {

  const styles = {
    ySwipeContainer: {
      containerStyle: {
        height: '50vh'
      }
    },
    xSwipeContainer: {
      containerStyle: {
        height: '50vh'
      }
    },
    page: {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }
    }
  }

  const renderPage = (row, num) => Array(num).fill(null).map( (page, i) => {
    return <div key={++i} {...styles.page}>{`Page ${row}-${i}`}</div>;
  });

  return (
    <SwipeableView axis="y" containerStyle={{height: '100vh'}}>
      <SwipeableView containerStyle={{height: '100vh'}}>
        {renderPage(1,1)}
      </SwipeableView>
      <SwipeableView containerStyle={{height: '100vh'}}>
        {renderPage(2,5)}
      </SwipeableView>
      <SwipeableView containerStyle={{height: '100vh'}}>
        {renderPage(3,5)}
      </SwipeableView>
    </SwipeableView>
    // <SwipeableView axis="y" enableMouseEvents {...this.state.verticalSwipeProps} containerStyle={{height: '100vh'}}>
    //   <DoableForm type="quickEntry" />
    //   <ReviewSection />
    // </SwipeableView>
  )
}

export default App;
