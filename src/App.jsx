import { useEffect, useState } from 'react'
import './App.css'
import Clima from './components/Clima'
import HashLoader from "react-spinners/HashLoader";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className="App">
      {loading ?
        <HashLoader
          color={'#162a3b'}
          loading={loading}
          size={100}/>

        :
        <Clima />
      }
    </div>
  )
}

export default App
