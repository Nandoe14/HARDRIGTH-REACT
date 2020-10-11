import React from 'react'
import { ContactUs } from './contactUs/ContactUs'
import { Footer } from './footer/Footer'
import { GetAhead } from './getAhead/GetAhead'
import { Header } from './header/Header'
import { LearnFrom } from './learnFrom/LearnFrom'
import { NavBar } from './navBar/NavBar'
import { SeeWhere } from './seeWhere/SeeWhere'
import { SeeWhereVideo } from './seeWhereVideo/SeeWhereVideo'

export const HardRigthContent = () => {
    return (
        <>
            <NavBar />
            <Header />
            <GetAhead />
            <SeeWhere />
            <LearnFrom />
            <SeeWhereVideo />
            <ContactUs />
            <Footer />
        </>
    )
}
