import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './DoableForm';

export class ReviewSection extends Component {

  // Reviewabls are Doables that need reviewing
  getReviewables = doables => {
    return doables.map( (doable, i) => {
      console.log('doable: ', doable);
      return <DoableForm key={doable.id} data={doable} />;
    })
  }

  render() {
    console.log('ReviewSection Render');

    return (
      <SwipeableView enableMouseEvents>
        { this.getReviewables(this.props.doables) }
      </SwipeableView>
    )
  }
}

const mapStateToProps = (state) => ({
  doables:  state.doables
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSection);
