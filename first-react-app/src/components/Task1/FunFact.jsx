import React from 'react'
import NavBar from './NavBar'
import './FunFact.css'
import FunFactLower from './FunFactLower'

function FunFact() {
  return (
    <div className='container'>
        <NavBar />
        <div className="lower-body">
            <FunFactLower/>
        </div>
    </div>
  )
}

export default FunFact