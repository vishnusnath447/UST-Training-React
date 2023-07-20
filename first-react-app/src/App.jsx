import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MarkList from "./components/MarkList"

function App() {
  const array = [
    { name: 'Suhail', age: 22, marks: 'A' },
    { name: 'Prince', age: 25, marks: 'A+' },
    { name: 'JeevaMol', age: 22, marks: 'B+' },
    { name: 'Anu Polli', age: 22, marks: 'C' },
    { name: 'Tomsun', age: 24, marks: 'A++' }
  ];
  return(
    <React.StrictMode>
      <MarkList values = {array} />
    </React.StrictMode>
  );
}

export default App
