import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import SideBan from './componets/SideBan'
import Contenw from './componets/Contenw'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="wrapper">
    
      <SideBan /> 
      
    
      <Contenw />
      </div>

    </>
  )
}

export default App
