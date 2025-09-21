import React, { useContext } from 'react'
import { AppContext } from '../context/context'

const Counter = () => {
        const { counter,setCounter } = useContext(AppContext);
    
  return (
    <div>
        <h2>Counter:{counter}</h2>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Add 1</button>
    </div>
  )
}

export default Counter
