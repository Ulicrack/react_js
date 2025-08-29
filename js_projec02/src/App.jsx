import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Tarjeta from './layouts/Tarjeta'
import Home from './layouts/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/Tarjeta' element = {<Tarjeta/>} />
    </Routes>
    </>
  )
}

export default App