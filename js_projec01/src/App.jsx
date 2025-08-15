import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Saludo } from './saludo'
import OcultarTexto from './ocultar_texto'
import Semaforo from './semaforo'
import SemaforoAutomatico from './semaforo_auto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Semaforo Manual</h1>
        <Semaforo />
        <h1>Semaforo Automático</h1>
        <SemaforoAutomatico />
        {/* 
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Saludo nombre = 'Ulises'/> 
        <OcultarTexto />
        */}
      </div>
      <p className="read-the-docs">
        Practico Semaforo: ReactJS - Ulises Cabrera
      </p>
    </>
  )
}

export default App
