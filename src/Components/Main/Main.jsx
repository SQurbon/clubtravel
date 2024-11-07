import './Main.css'
import React from 'react'
import foto1 from '../../Assisstents/img/dubai.jpeg'
import foto2 from '../../Assisstents/img/malayziya.jpg'
import foto3 from '../../Assisstents/img/gruziya.jpg'
import foto4 from '../../Assisstents/img/maldiv.jpg'
import foto5 from '../../Assisstents/img/misr.jpg'
import foto6 from '../../Assisstents/img/tailand.jpg'
import sertifikat1 from '../../Assisstents/img/sertifikat1.jpg'
import sertifikat2 from '../../Assisstents/img/sertifikat2.jpg'
import sertifikat3 from '../../Assisstents/img/sertifikat3.jpg'
import sertifikat4 from '../../Assisstents/img/sertifikat4.jpg'
import sertifikat5 from '../../Assisstents/img/sertifikat5.jpg'
import sertifikat6 from '../../Assisstents/img/sertifikat6.jpg'
import sertifikat7 from '../../Assisstents/img/sertifikat7.jpg'
import rahbar from '../../Assisstents/img/sarvar kurambaev.JPG'
import ishchilar1 from '../../Assisstents/img/shadiyeva nozima.jpg'
import ishchilar2 from '../../Assisstents/img/abdulaev akbar.jpg'
import ishchilar3 from '../../Assisstents/img/azamkhojaev kozimhoja.jpg'
import ishchilar4 from '../../Assisstents/img/matkarimova nodira.jpg'
import ishchilar5 from '../../Assisstents/img/abaev alik.jpg'
import ishchilar6 from '../../Assisstents/img/bekpulatov amir.JPG'
import ishchilar7 from '../../Assisstents/img/raxmatulaev abdujalil.JPG'
import jamoa from '../../Assisstents/img/jamoa.JPG'
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <main id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">Biz haqimizda</h1>
                        <h1 className="text">Biz haqimizda</h1>
                    </div>
                    <div className="col-auto">
                        <img src={ishchilar1} alt="" />
                        <p className="top">
                        Shadiyeva Nozima
                        </p>
                        <p className="bottom">
                            2-filial rahbari
                        </p>
                    </div>
                    <div className="col-auto">
                        <img src={rahbar} alt="" />
                        <p className="top">
                        Sarvar Kurambaev
                        </p>
                        <p className="bottom">Bosh rahbar</p>
                    </div>
                    <div className="col-auto">
                        <img src={ishchilar2} alt="" />
                        <p className="top">
                        Abdullaev Akbar
                        </p>
                        <p className="bottom">
                            Kruiz va Yevropa bo`lim rahbari
                        </p>
                    </div>
                </div>
                <div className="ishchilar row">
                    <div className="col-auto">
                        <div className="box">
                            <img src={ishchilar3} alt="" />
                            <p className='top'>Azamkho`jaev Kozimhoja</p>
                            <p className="bottom">Tur menedjer</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="box">
                            <img src={ishchilar4} alt="" />
                            <p className='top'>Matkarimova Nodira</p>
                            <p className="bottom">Tur menedjer</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="box">
                            <img src={ishchilar5} alt="" />
                            <p className='top'>Abaev Alik</p>
                            <p className="bottom">Tur menedjer</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="box">
                            <img src={ishchilar6} alt="" />
                            <p className='top'>Bekpulatov Amir</p>
                            <p className="bottom">Tur menedjer</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="box">
                            <img src={ishchilar7} alt="" />
                            <p className='top'>Raxmatulaev Abdujalil</p>
                            <p className="bottom">Tur menedjer</p>
                        </div>
                    </div>
                </div>
                <div className="row second">
                    <div className="col-lg-12">
                        <h1 className="top">Bizning yutuqlarimiz</h1>
                        <h1 className="text">Bizning yutuqlarimiz</h1>
                    </div>
                    <div className="col-auto">
                        <img src={sertifikat6} alt="" />
                    </div>
                    <div className="col-auto">
                        <img src={sertifikat7} alt="" />
                    </div>
                </div>
                <div className="sertifikat row">
                    <div className="col-auto">
                        <img src={sertifikat1} alt="1photo" />
                    </div>
                    <div className="col-auto">
                        <img src={sertifikat2} alt="1photo" />
                    </div>
                    <div className="col-auto">
                        <img src={sertifikat3} alt="1photo" />
                    </div>
                    <div className="col-auto">
                        <img src={sertifikat4} alt="1photo" />
                    </div>
                    <div className="col-auto">
                        <img src={sertifikat5} alt="1photo" />
                    </div>
                </div>
                <div className="third row">
                    <div className="col-lg-12">
                        <p className="last">
                            Bu bizning 2023-yilgacham olgan mukofotlarimiz!!
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <img src={foto1} alt="" />
                            <p className="name">Dubai</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <img src={foto2} alt="" />
                            <p className="name">Malayziya</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <img src={foto3} alt="" />
                            <p className="name">Gruziya</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <img src={foto4} alt="" />
                            <p className="name">Maldiv</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <img src={foto5} alt="" />
                            <p className="name">Misr</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <img src={foto6} alt="" />
                            <p className="name">Tailand</p>
                        </div>
                    </div>
                    <Link to='/page'><button>Ko`proq</button></Link>
                </div>
            </div>
        </main>
    )
}
