import React from 'react'
import './Content.css'

function Content(props) {
  return (
    <div className='component-container'>
        {props.values.map((element,index)=>
            <div key={index} className='component'>
                <div className="image-div">
                    <img src={element.url} />
                </div>
                <div className="right-div">
                    <h5>{element.country} <a href={element.link}>View on Google Map</a></h5>
                    <h1>{element.place}</h1>
                    <h3>{element.date}</h3>
                    <p>{element.desc}</p>
                </div>
            </div>
        )}
    </div>
  )
}
//not finished

export default Content