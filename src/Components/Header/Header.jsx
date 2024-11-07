import './Header.css'
import foto from '../../Assisstents/img/photo.jpg'
import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Header() {
  return (
    <header id='home'>
      <Navbar/>
      <div className="foto">
        <img src={foto} alt="" />
      </div>
      <h1>Club <span>Travel</span></h1>
      <p className='bottom'>Dunyoni biz bilan zaft eting!</p>
    </header>
  )
}
