import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Page from './Components/Page/Page'
export default function App() {
  return (
    <>
      <a className='phone' href="tel:+998900998090"><i className="fa-solid fa-phone"></i></a>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page' element={<Page />} />
      </Routes>
    </>
  )
}
