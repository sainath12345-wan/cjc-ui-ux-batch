import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Course from './Course'


function App() {


  return (
    <>
      {/* <BrowserRouter>
        <div className='bg-dark '>
          <div>
            <h1 className='text-center text-white'>Routing App</h1>
            <div className='d-flex justify-content-around pb-2'>
              <Link className='btn btn-light' to={'home'}>HOME</Link>
              <Link className='btn btn-light' to={'about'}>About</Link>
              <Link className='btn btn-light' to={'contact'}>Contact</Link>
              <Link className='btn btn-light' to={'course'}>Course</Link>
            </div>
          </div>

          <Routes>
            <Route path='home' element={<Home></Home>}></Route>
          </Routes>

        </div>
      </BrowserRouter> */}

      <BrowserRouter>

        <div className='d-flex bg-dark justify-content-around p-2'>
          <Link className='btn btn-light' to={'home'}>HOME</Link>
          <Link className='btn btn-light' to={'about'}>About</Link>
          <Link className='btn btn-light' to={'contact'}>Contact</Link>
          <Link className='btn btn-light' to={'course'}>Course</Link>
        </div>

        <Routes>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='course' element={<Course></Course>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
