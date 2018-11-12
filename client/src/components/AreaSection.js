import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import { MobileStepper } from '@material-ui/core';
// import { virtualize } from 'react-swipeable-views-utils';  // TODO text virtualize to solve destruction of empty SwipeableViews
// import { mod } from 'react-swipeable-views-core';
import Area from './Area';

export class AreaSection extends Component {

  state = {
    pageIndex: 0
  }

  renderAreas = (areas) => {
    return areas.map( area => <Area
      key={area}

      area={area}
      {...this.props.swipeToggler}
      />);
    }

  render () {
    return (
      <div {...styles.container}>
        <SwipeableView enableMouseEvents disabled={this.props.disabled} onChangeIndex={this.handleChangeIndex}>
          { this.renderAreas(this.props.areas) }
        </SwipeableView>
        {this.props.areas.length > 1 && <MobileStepper
          steps={this.props.areas.length}
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

const mapStateToProps = (state, ownProps) => ({
  areas: [...new Set(state.doables.map( doable => doable.area ).filter( area => area !== '' ))],
  ...ownProps
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AreaSection);
