import React from 'react';
import { connect } from 'react-redux';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import Doable from './Doable';

export function Area (props) {

  return <mobiscroll.Form theme="material" lang="de">
    <mobiscroll.FormGroup {...styles.container}>
        <mobiscroll.FormGroupTitle>{props.area}</mobiscroll.FormGroupTitle>
        <mobiscroll.Listview
            theme="material"
            lang="de"
            itemType={Doable}
            data={props.doables}
            striped={true}
            sortable={true}
        />
    </mobiscroll.FormGroup>
    </mobiscroll.Form>;
};

const styles = {
  container: {
    style: {
      maxWidth: '800px',
      height: '100vh',
      boxSizing: 'border-box'
    }
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

const mergeProps = (state, actions, ownProps) => ({
  area: ownProps.area,
  doables: state.doables.filter( doable => doable.area === ownProps.area)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Area);
