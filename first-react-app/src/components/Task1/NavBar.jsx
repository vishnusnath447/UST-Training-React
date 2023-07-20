import React from 'react'
import Image from '../../assets/react.svg'
import './NavBar.css'

function NavBar() {
  return (
    <div className='header'>
        <div className="left">
            <img src={Image} alt="" />
            <h2>ReactFacts</h2>
        </div>
        <div className="right">
            <h3>React Course - Project 1</h3>
        </div>
    </div>
  )
}

export default NavBar