import React from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import SectionKontakt from './Components/Section-kontakt/SectionKontakt'
import SectionLocation from './Components/Section-location/SectionLocation'
import Footer from './Components/Footer/Footer'

export default function Home() {
    return (
        <div>
            <Header />
            <Main />
            <SectionKontakt />
            <SectionLocation />
            <Footer />
        </div>
    )
}
