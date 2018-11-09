import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './DoableForm';

export class ReviewSection extends Component {

  // Reviewabls are Doables that need reviewing
  getReviewables = doables => {
    return doables.map( (doable, i) => <DoableForm key={i} data={doable} />);
  }

  render() {
    return (
      <SwipeableView>
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
