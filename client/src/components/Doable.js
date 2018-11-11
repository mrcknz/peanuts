import React from 'react';

const handleTouchMove = e => {
  e.stopPropagation();
  // console.log('li',e.type);
  // [...e.touches, ...e.targetTouches].forEach( target => target.stopPropagation() );
}

const Doable = ({item}) => <li data-id={item.id} onTouchMove={handleTouchMove}>{item.name}</li>;

export default Doable;