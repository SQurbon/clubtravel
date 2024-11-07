import React from 'react'
import './Navbar.css'
import foto from '../../Assisstents/img/logo.png'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='navbar'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logo">
                            <img src={foto} alt="" />
                            <p>Club <span>Travel</span></p>
                        </div>
                     <Link to='/'><i className="fa-solid fa-x"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
  )
}
