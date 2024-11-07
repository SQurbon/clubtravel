import './SectionLocation.css'

import React from 'react'
import video from '../../Assisstents/img/video_2023-12-24_15-01-07.mp4'
import post from '../../Assisstents/img/Снимок экрана 2023-12-24 150333.png'

export default function SectionLocation() {
    return (
        <section className='location'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">Manzilimiz</h1>
                        <h1 className="text">Manzilimiz</h1>
                    </div>
                        <div className="col-lg-6">
                        <video src={video} controls poster={post} ></video>
                    </div>
                    <div className="col-lg-6">
                        <div className='manzil' style={{ position: 'relative', overflow: 'hidden' }}><a href="https://yandex.uz/maps/10335/tashkent/search/%D0%BC%D0%B5%D1%82%D1%80%D0%BE%20%D0%A8%D0%B0%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BD/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee;font-size:12px;', position: 'absolute;top:0px;' }}></a><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee;font-size:12px;', position: 'absolute;top:14px;' }}></a><iframe src="https://yandex.uz/map-widget/v1/?ll=69.287237%2C41.338881&mode=search&sll=69.288275%2C41.356367&sspn=0.003517%2C0.001694&text=%D0%BC%D0%B5%D1%82%D1%80%D0%BE%20%D0%A8%D0%B0%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BD&z=12.47" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
