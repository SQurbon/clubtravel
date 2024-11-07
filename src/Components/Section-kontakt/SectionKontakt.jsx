import './SectionKontakt.css'

import React from 'react'
import foto from '../../Assisstents/img/kontact.foto.jpg'
export default function SectionKontakt() {
    return (
        <section id='cantact' className='kontakt'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            Kontakt
                        </h1>
                        <h1 className="text">
                            Kontakt
                        </h1>
                    </div>
                    <div className="col-lg-6">
                        <img src={foto} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <p className='top'><i class="fa-solid fa-circle-info"></i>Ma`lumot</p>
                        <p className="title">
                            Bizning afzaliklarimiz ,<br/> jonli travel kontent , hamyonbob narxlarga lux kontentlat , <br/>
                            15 yillik turizimdagi ish tajribasi , 20tadan ortiq davlatlardagi 1000 dan ortiq mehmonhonalarni o`rganib kelganmiz hamda bizning ishimiz litsenziyalangan. 
                        </p>
                        <div className="box">
                            <a href="https://t.me/Clubtravel_uz"> <i className="fa-brands fa-telegram"></i>Club Travel</a>
                            <a href="https://www.instagram.com/clubtravel_uz/"><i className="fa-brands fa-instagram"></i>clubtravel_uz</a>
                        </div>
                        <div className="box">
                            <a href="tel:+998978908090"><i className="fa-solid fa-phone"></i>+998 (97) 890-80-90</a>
                            <a href="tel:+998970348090"><i className="fa-solid fa-phone"></i>+998 (97) 034-80-90</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
