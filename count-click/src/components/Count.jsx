import React from 'react'
import './Count.css'

const Count = () => {
  const [counter,setCounter]=React.useState(0);
  
  const increment = ()=>{
    setCounter((oldCounter)=>oldCounter+1);
  }
  const decrement = ()=>{
    setCounter((oldCounter)=>oldCounter-1);
  }

  return (
    <div className='container'>
        <div className="heading">
            <h1>Counter</h1>
        </div>
        <div className="lower">
            <button className='lft-button' onClick={decrement}><p>-</p></button>
            <h2 className='num-count'>{counter}</h2>
            <button className='rt-button' onClick={increment}><p>+</p></button>
        </div>
    </div>
  )
}

export default Count