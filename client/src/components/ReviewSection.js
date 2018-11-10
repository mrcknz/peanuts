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
      { renderReviewables(props.doables) }
    </SwipeableView>
  )
}

const mapStateToProps = (state) => ({
  doables:  state.doables
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSection);
