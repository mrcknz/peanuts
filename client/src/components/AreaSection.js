import React from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';  // TODO text virtualize to solve destruction of empty SwipeableViews
import { mod } from 'react-swipeable-views-core';
import Area from './Area';

export function AreaSection (props) {
  const Areas = (areas) => {
    return areas.map( area => <Area
      key={area}
      area={area}
      {...props.swipeToggler}
      />);
    }

  return (
    <SwipeableView enableMouseEvents disabled={props.disabled}>
      { Areas(props.areas) }
    </SwipeableView>
  )
}

const mapStateToProps = state => ({
  areas: [...new Set(state.doables.map( doable => doable.area ).filter( area => area !== '' ))],
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AreaSection);
