import React, { useState } from 'react'
import rock from '/src/assets/icon-rock.svg'
import paper from '/src/assets/icon-paper.svg'
import scissor from '/src/assets/icon-scissors.svg'
import './RockPaperScissor.css'


const RockPaperScissor = () => {

  const [userScore,setUserScore] = useState(0);
  const [computerScore,setComputerScore] = useState(0);
  const [drawScore,setDrawScore] = useState(0);
  const [message,setMessage] = useState('Lets Play Rock - Paper - Scissors');

  const [messageStyle,setMessageStyle] = useState({
    color:'#3b4262'
  });

  const computerChoice=()=>{
    const choice = ['R','P','S'];
    return choice[Math.floor(Math.random()*3)];
  }

  const play=(userChoice)=>{
    const machineChoice = computerChoice();
    switch(userChoice+machineChoice){
      case 'RP':
      case 'PS':
      case 'SR':
        setComputerScore(computerScore+1);
        setMessage('Computer - Won');
        setMessageStyle({color:'red'});
        break;
      case 'PR':
      case 'SP':
      case 'RS':
        setUserScore(userScore+1);
        setMessage('User - Won');
        setMessageStyle({color:'lightgreen'});
        break;
      default:
        setDrawScore(drawScore+1);
        setMessage('Its - a - Draw');
        setMessageStyle({color:'orange'});
    }
  }

  return (
    <div className='container'>
      <div className="heading">
        <h1>Rock - Paper - Scissor</h1>
      </div>
      <div className="images">
        <button className="rock" onClick={()=>play('R')}>
          <img src={rock} alt="#" />
        </button>
        <button className="paper" onClick={()=>play('P')}>
          <img src={paper} alt="#" />
        </button>
        <button className="scissor" onClick={()=>play('S')}>
          <img src={scissor} alt="#" />
        </button>
      </div>
      <div className="points">
        <div className="user">
          <h2>User</h2>
          <h2 className='user-points'>{userScore}</h2>
        </div>
        <div className="draw">
          <h2>Draw</h2>
          <h2 className='draw-points'>{drawScore}</h2>
        </div>
        <div className="computer">
          <h2>Computer</h2>
          <h2 className='computer-points'>{computerScore}</h2>
        </div>
      </div>
      <div className="result">
        <div style={messageStyle}>{message}</div>
      </div> 
    </div>
  )
}

export default RockPaperScissor