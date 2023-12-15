import { useEffect, useState } from 'react'
import './assets/css/App.css'
import SideBan from './componets/SideBan'
import Contenw from './componets/Contenw'
import Producto from './componets/producto'
import Users from './componets/Users'
import { Routes , Route } from 'react-router-dom'


function App() {
  const [listProducts, setlistProducts] = useState([]);
  useEffect(() => {
    const traedata = async () => {
      const response = await fetch('http://localhost:8001/prodt')
      const data = await response.json()
      setlistProducts(data.data)
    }
    traedata()
  }, []);

  return (
    <>
      <div id="wrapper">
        <SideBan />
        <Routes> 
          <Route path="/" element= {<Contenw />} />
          <Route path="/users" element= {<Users />} />
          <Route path="/producto" element= {<Producto />} />
         </Routes> 
        <div className="App">
        </div>
      </div>

    </>
  )
}

export default App




