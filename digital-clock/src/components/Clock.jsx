import React, { Component } from 'react'

class Clock extends Component {
    
    constructor(){
        super()
        this.state = {date:new Date,color1:10,color2:10,color3:10};
    }

   update(){
        this.setState({
            date:new Date,
            color1:( Math.floor(Math.random() * 255)),
            color2:( Math.floor(Math.random() * 255)),
            color3:( Math.floor(Math.random() * 255))
        })
    }

    componentDidMount(){
        this.timer = setInterval(()=>this.update(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

  render() {
    return (
      <h1 style={{color: `rgb(${this.state.color1},${this.state.color2},${this.state.color3})`}}>
          {console.log(this.state.date.toLocaleTimeString())}
          {this.state.date.toLocaleTimeString("en-US")}
      </h1>
    )
  }
}

export default Clock