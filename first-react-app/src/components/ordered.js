import React from 'react';

const OrderedList = ()=>{

    const listItems = ['Item 1', 'Item 2', 'Item 3'];
    const listStyle = {
        color: "#766FFF"
    };
  
    return (
      <ol style={listStyle}>
        <li>{listItems[0]}</li>
        <li>{listItems[1]}</li>
        <li>{listItems[2]}</li>
      </ol>
    );
};

export default OrderedList;