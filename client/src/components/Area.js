import React from 'react';
import { connect } from 'react-redux';

export function Area (props) {

  const renderDoables = doables => {
    return doables.map( doable => <li key={doable.id}>{doable.name}</li>)
  }

  return <div {...styles.container}>
    <ul>
      { renderDoables(props.doables) }
    </ul>
  </div>;
}

const styles = {
  container: {
    style: {
      maxWidth: '800px',
      height: '100vh',
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
