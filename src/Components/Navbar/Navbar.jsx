import './Navbar.css'
import foto from '../../Assisstents/img/logo.png'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logo">
                            <img src={foto} alt="" />
                            <p>Club <span>Travel</span></p>
                        </div>
                        <ul>
                            <li>
                                <a href="#home">Bosh sahifa</a>
                            </li>
                            <li>
                                <a href="#about">Biz haqimizda</a>
                            </li>
                            <li>
                                <a href="#cantact">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
