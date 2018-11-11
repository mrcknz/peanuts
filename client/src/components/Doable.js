import React from 'react';

const Doable = ({item}) => console.log(item.name) || <li data-id={item.id}>{item.name}</li>;

export default Doable;