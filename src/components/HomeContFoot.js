import React from 'react'
import { ContactUs } from './contactUs/ContactUs'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { NavBar } from './navBar/NavBar'

export const HomeContFoot = () => {

    window.scrollTo(0, 0);

    return (
        <>
            <NavBar />
            <Header />
            <ContactUs />
            <Footer />
        </>
    )
}
