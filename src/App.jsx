import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <div className='app'>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/crypto/:cryptoId' element={<Crypto/>}/>
     </Routes>
    </div>
  )
}

export default App