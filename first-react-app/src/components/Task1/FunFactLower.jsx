import React from 'react'
import './FunFactLower.css'
import image from '../../assets/react.svg'
import ListElement from './ListElement'

function FunFactLower() {
    const array = [
        'Was first released in 2013',
        'Was originally created by Jordan Walke',
        'Has well over 100K stars on GitHub',
        'Is maintained by Facebook',
        'Powers thousand of enterprise app, including mobile apps'
    ];
  return (
    <div>
        <h1>Fun facts about React</h1>
        <img className="bg-img" src={image} alt="" />
        <ul>
            <ListElement val = {array}/>
        </ul>
    </div>
  )
}

export default FunFactLower