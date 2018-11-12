import React from 'react';
import { connect } from 'react-redux';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import Doable from './Doable';

export function Area (props) {

  const stages = {
    left: [
      {
        percent: 10,
        icon: 'pencil',
        color: 'orange',
        action: function () {
          mobiscroll.toast({
              message: 'Edit'
          });
        }
      },
      {
        percent: 40,
        icon: 'checkmark',
        color: 'green',
        action: function () {
          mobiscroll.toast({
              message: 'Done'
          });
        },
        undo: true
      }
    ],
    right: [
      {
        percent: -40,
        icon: 'remove',
        color: 'red',
        action: function () {
          mobiscroll.toast({
              message: 'Deleted'
          });
        },
        undo: true
      }
    ]
  }

  return <mobiscroll.Form theme="material" lang="de" {...styles.forms}>
    <mobiscroll.FormGroup {...styles.container}>
        <mobiscroll.FormGroupTitle>{props.area}</mobiscroll.FormGroupTitle>
        <mobiscroll.Listview
            theme="material"
            lang="de"
            itemType={Doable}
            data={props.doables}
            sortable={{handle: 'left'}}
            stages={stages}
            undoText="Undo"
            onSortStart={props.disableSwiping}
            onSortEnd={props.enableSwiping}
            onSlideStart={props.disableSwiping}
            onSlideEnd={props.enableSwiping}
        />
    </mobiscroll.FormGroup>
    </mobiscroll.Form>;
};

const styles = {
  container: {
    style: {
      maxWidth: '800px',
      height: '100vh',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      margin: '0'
    }
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

const mergeProps = (state, actions, ownProps) => ({
  ...ownProps,
  area: state.areas[ownProps.area].name,
  doables: state.doables.filter( doable => doable.area === ownProps.area)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Area);
