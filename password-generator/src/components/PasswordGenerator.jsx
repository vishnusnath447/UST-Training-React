import React from 'react'
import './PasswordGenerator.css'

const PasswordGenerator = () => {

    const [passState,setPassState] = React.useState('');

    const lengthArray = [2,3,4];
    const length = lengthArray[Math.floor(Math.random()*3)];
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const specialChar = '!@#$%&*&~+=-_/?.,:';
    const numbers = '0123456789';
    const args = [upperCase,lowerCase,specialChar,numbers]
    let list =[]

    const getRandomChar=(argument)=>{
        return argument[Math.floor(Math.random()*argument.length)];
    }

    const generatePassword=()=>{
        let pass = '';
        let count=0;
        while(true){
            const arg = args[Math.floor(Math.random()*args.length)];
            if(list.includes(arg)===false){
                pass=pass+getRandomChar(arg);
                count++;
                list.push(arg);
                console.log(list);
            }
            if(count===4){
                break;
            }
        }
        for(let i=0;i<length;i++){
            pass=pass+getRandomChar(args[Math.floor(Math.random()*args.length)]);
        }
        setPassState(pass);
    }

  return (
    <div className='container'>
        <div className="password">
            <h2>{passState}</h2>
        </div>
        <div className="generate">
            <button onClick={generatePassword}>Generate</button>
        </div>
    </div>
  )
}

export default PasswordGenerator