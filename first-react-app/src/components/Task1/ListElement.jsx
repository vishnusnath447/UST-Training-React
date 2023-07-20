import React from "react";
import './ListElement.css'

function ListElement(props){
    return props.val.map(value=><li>{value}</li>);
}

export default ListElement;