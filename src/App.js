import RequestApi from './components/RequestApi'
import Loading from './components/Loading'
import { useState } from 'react'
import './styles.css'

// document.body.style = "background: https://img.freepik.com/vector-gratis/fondo-pintura-acuarela-rosa-vibrante_53876-58930.jpg?size=626&ext=jpg"

function App() { 
  
  const [isTrue, setIsTrue] = useState(true)
  
  setTimeout(() => {
    setIsTrue(false)
  }, 2000)
  
  return (
    <div className="app">           
      {
        isTrue? <Loading /> : <RequestApi /> 
      }
    </div>
  )
}

export default App
