import React from 'react';
import { connect } from 'react-redux';
import SwipeableView from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import Area from './Area';

export function AreaSection (props) {
  const renderAreas = ({doables, areas}) => {
    return [...areas].map( area => <Area
      key={area}
      doables={doables.filter( doable => doable.area === area )}
    />);
  }


  return (
    <SwipeableView enableMouseEvents>
      { renderAreas(props) }
    </SwipeableView>
  )
}

const mapStateToProps = (state) => ({
  areas: new Set(state.doables.map( doable => doable.area ).filter( area => !!area)),
  doables: state.doables
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AreaSection);
