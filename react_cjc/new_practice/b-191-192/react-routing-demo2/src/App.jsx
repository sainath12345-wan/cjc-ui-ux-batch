import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Course from './components/Course'
function App() {


  return (
    <>
      <BrowserRouter>

        <div className='bg-dark p-2 d-flex justify-content-around'>
          <Link className='btn btn-light' to={'home'}>HOME</Link>
          <Link className='btn btn-light' to={'about'}>About</Link>
          <Link className='btn btn-light' to={'course'}>Course</Link>
        </div>

        <Routes>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='course' element={<Course></Course>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
