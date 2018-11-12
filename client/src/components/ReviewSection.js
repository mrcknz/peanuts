import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import DoableForm from './DoableForm';
import MobileStepper from '@material-ui/core/MobileStepper';

export class ReviewSection extends Component {

  state = {
    pageIndex: 0
  }

  // Reviewabls are Doables that need reviewing
  renderReviewables = reviewables => {
    return reviewables.map( (reviewable) =>
      <DoableForm key={reviewable.id} doableId={reviewable.id} /> );
  }

  handleChangeIndex = index => {
    this.setState({pageIndex: index})
  }

  render () {
    return (
      <div {...styles.container}>
        <SwipeableView enableMouseEvents onChangeIndex={this.handleChangeIndex}>
          { this.renderReviewables(this.props.reviewables) }
        </SwipeableView>
        {this.props.reviewables.length > 1 && <MobileStepper
          steps={this.props.reviewables.length}
          position="static"
          activeStep={this.state.pageIndex}
          {...styles.stepper}
        />}
      </div>
    )
  }
}

const styles = {
  stepper: {
    style: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center'
    }
  },
  container: {
    style: {
      position: 'relative'
    }
  }
}

const mapStateToProps = (state) => ({
  reviewables:  state.doables.filter( doable => doable.area === '')
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSection);
