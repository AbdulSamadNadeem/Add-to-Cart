import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Products/>} />
    </Routes>
    </>
  )
}

export default App
