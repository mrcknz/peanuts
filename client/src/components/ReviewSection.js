import React from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './DoableForm';

export function ReviewSection (props) {

  // Reviewabls are Doables that need reviewing
  const renderReviewables = reviewables => {
    return reviewables.map( (reviewable) =>
      <DoableForm key={reviewable.id} doableId={reviewable.id} /> );
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
