import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'

function App() {
 
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }
//with parameter
const addToFive = (num) => {
  alert(num + 5);
}

  return (
    <>
     
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>
      <Counter></Counter>
      
      <Team></Team>

      {/* adding event handler way -1 */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      {/* Incline Event handler- way 2,3 */}
      <button onClick={()=>{alert('third button clicked')}}>Third</button>
      {/* with parameter, need to use function- way -3  */}
      <button onClick={()=>addToFive(3)}>Four</button>
     
    </>
  )
}

export default App
