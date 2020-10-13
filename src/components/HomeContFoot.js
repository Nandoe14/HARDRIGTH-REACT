import React from 'react'
import { ContactUs } from './contactUs/ContactUs'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const HomeContFoot = () => {

    window.scrollTo(0, 0);

    return (
        <>
            <Header />
            <ContactUs />
            <Footer />
        </>
    )
}
