import React from 'react';
import { connect } from 'react-redux';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { completeDoable } from '../actions';
import Doable from './Doable';

export function Area (props) {

  const getStages = () => ({
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
        action: function ({target}) {
          props.completeDoable(target.getAttribute('data-id'))
          mobiscroll.toast({
              message: 'Done'
          });
        }
      }
    ],
    right: [
      {
        percent: -40,
        icon: 'remove',
        color: 'red',
        action: function ({target}, inst) {
          inst.remove(target);
          mobiscroll.toast({
              message: 'Deleted'
          });
        },
        undo: true
      }
    ]
  });

  return <mobiscroll.Form theme="material" lang="de" {...styles.forms}>
    <mobiscroll.FormGroup {...styles.container}>
        <mobiscroll.FormGroupTitle>{props.area}</mobiscroll.FormGroupTitle>
        <mobiscroll.Listview
            theme="material"
            lang="de"
            itemType={Doable}
            data={props.doables}
            sortable={{handle: 'left'}}
            stages={getStages()}
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

const mapDispatchToProps = dispatch => ({
  completeDoable: id => dispatch(completeDoable(id))
});

const mergeProps = (state, actions, ownProps) => ({
  ...ownProps,
  area: state.areas[ownProps.area].name,
  doables: state.doables.filter( doable => doable.area === ownProps.area && doable.status !== 'complete'),
  ...actions
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Area);
