
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Front from './pages/Front'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import About from './pages/About'
import './app.css'


function App() {

  return (
    <>
    <Navbar/>


    <Routes>
      <Route>

      <Route path='/' element={<Front/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>


      </Route>
    </Routes>

    </>
  )
}

export default App
