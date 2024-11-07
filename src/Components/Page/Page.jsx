import React from 'react'
import Nav from '../Navbar/Nav'
import './Page.css'
import foto1 from '../../Assisstents/img/dubai.jpeg'
import foto2 from '../../Assisstents/img/yevropa.jpg'
import foto3 from '../../Assisstents/img/gruziya.jpg'
import foto4 from '../../Assisstents/img/maldiv.jpg'
import foto5 from '../../Assisstents/img/misr.jpg'
import foto6 from '../../Assisstents/img/tailand.jpg'
import foto7 from '../../Assisstents/img/afrika.jpg'
import foto8 from '../../Assisstents/img/bali.jpeg'
import foto9 from '../../Assisstents/img/chernogorya.jpg'
import foto10 from '../../Assisstents/img/kruiz.jpeg'
import foto11 from '../../Assisstents/img/malayziya.jpg'
import foto12 from '../../Assisstents/img/singapur.jpg'
import foto13 from '../../Assisstents/img/turkiya.jpg'
import foto14 from '../../Assisstents/img/veitnam.jpg'
import foto15 from '../../Assisstents/img/yaponiya.jpg'
import Footer from '../Footer/Footer'
export default function Page() {
    return (
        <>
            <Nav />
            <div className='page'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto1} alt="" />
                                <p className="name">Dubaiga sayohatimiz <span>390$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto2} alt="" />
                                <p className="name">Yevropaga sayohatimiz <span>1490$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto3} alt="" />
                                <p className="name">Gruziyaga sayohatimiz <span>590$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto4} alt="" />
                                <p className="name">Maldivga sayohatimiz <span>990$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto5} alt="" />
                                <p className="name">Misrga sayohatimiz <span>490$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto6} alt="" />
                                <p className="name">Tailandga sayohatimiz <span>690$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto7} alt="" />
                                <p className="name">Afrikaga sayohatimiz <span>1500$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto8} alt="" />
                                <p className="name">Baliga sayohatimiz <span>1190$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto9} alt="" />
                                <p className="name">Chernogoryaga sayohatimiz <span>990$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto10} alt="" />
                                <p className="name">Kruizga sayohatimiz <span>490$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto11} alt="" />
                                <p className="name">Malayziyaga sayohatimiz <span>790$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto12} alt="" />
                                <p className="name">Singapurga sayohatimiz <span>1090$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto13} alt="" />
                                <p className="name">Turkiyaga sayohatimiz <span>490$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto14} alt="" />
                                <p className="name">Veitnamga sayohatimiz <span>890$</span> dan</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">
                                <img src={foto15} alt="" />
                                <p className="name">Yaponiyaga sayohatimiz <span>1890$</span> dan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
