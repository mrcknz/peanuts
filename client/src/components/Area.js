import React from 'react';

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

export default Area;
