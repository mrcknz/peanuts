import React from 'react';

const Doable = ({item}) => {
  const {id, name, status} = item;
  return <li data-id={id} {...styles(status)}>{name}</li>;
}

const styles = status => {
  switch (status) {
    case 'complete':
      return {
        style: {
          backgroundColor: 'lightgreen',
          color: '#888'
        }
      }

    default:
      return {
        style: {
          backgroundColor: 'white'
        }
      }
  }
}

export default Doable;