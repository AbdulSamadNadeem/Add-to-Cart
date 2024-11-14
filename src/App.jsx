import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Products from './pages/products'


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