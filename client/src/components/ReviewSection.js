import React from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './DoableForm';

export function ReviewSection (props) {

  // Reviewabls are Doables that need reviewing
  const renderReviewables = doables => {
    return doables.map( (doable, i) =>
      <DoableForm key={doable.id} data={doable} /> );
  }

  return (
    <SwipeableView enableMouseEvents>
      { renderReviewables(props.reviewables) }
    </SwipeableView>
  )
}

const mapStateToProps = (state) => ({
  reviewables:  state.doables.filter( doable => doable.area === '')
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSection);
