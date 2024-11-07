import './Footer.css'

import React from 'react'
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
              <p>Club <span>Travel</span></p>  
            <div className="box">
              <a href="https://t.me/Clubtravel_uz"> <i className="fa-brands fa-telegram"></i>Club Travel</a>
              <a href="https://www.instagram.com/clubtravel_uz/"><i className="fa-brands fa-instagram"></i>clubtravel_uz</a>
              <a href="tel:+998978908090"><i className="fa-solid fa-phone"></i>+998 (97) 890-80-90</a>
              <a href="tel:+998970348090"><i className="fa-solid fa-phone"></i>+998 (97) 034-80-90</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
