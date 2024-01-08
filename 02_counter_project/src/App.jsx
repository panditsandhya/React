import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const incrementValue = () => {
    
    // Interview Question
    //counter = counter + 1
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

    if(counter === 20){
      setCounter(20)
    }else{
      setCounter(counter + 1)
    }
  }
  
  const decrementValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
   <h1>Counter App</h1>
   <h2>Count Value: {counter}</h2>
   <button onClick={incrementValue}>Increment</button>
   <button onClick={decrementValue}>Decrement</button>
    </>
  )
}

export default App

