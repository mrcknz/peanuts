import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './DoableForm';

export class ReviewSection extends Component {

  render() {
    return (
      <SwipeableView>
        <DoableForm />
        <DoableForm />
        <DoableForm />
      </SwipeableView>
    )
  }
}

const mapStateToProps = (state) => ({
  // doables:  state.doables
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSection);
