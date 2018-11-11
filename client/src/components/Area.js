import React from 'react';
import { connect } from 'react-redux';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import Doable from './Doable';

export function Area (props) {

  const handleTouchMove = e => {
    console.log('FormGrouch touchMove',e);
  }

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
      },
      {
        percent: -10,
        icon: 'folder',
        color: 'lightblue',
        action: function () {
          mobiscroll.toast({
              message: 'Move'
          });
        }
      }
    ]
  }

  return <mobiscroll.Form theme="material" lang="de" onTouchMove={handleTouchMove}>
    <mobiscroll.FormGroup {...styles.container} onTouchMove={handleTouchMove}>
        <mobiscroll.FormGroupTitle>{props.area}</mobiscroll.FormGroupTitle>
        <mobiscroll.Listview
            theme="material"
            lang="de"
            itemType={Doable}
            data={props.doables}
            sortable={{handle: 'left'}}
            stages={stages}
            undoText="Undo"
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
