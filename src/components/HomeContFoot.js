import React from 'react'
// import { AppRouter } from '../routers/AppRouter'
import { ContactUs } from './contactUs/ContactUs'
import { Footer } from './footer/Footer'
// import { GetAhead } from './getAhead/GetAhead'
import { Header } from './header/Header'
// import { LearnFrom } from './learnFrom/LearnFrom'
// import { NavBar } from './ui/NavBar'
// import { SeeWhere } from './seeWhere/SeeWhere'
// import { SeeWhereVideo } from './seeWhereVideo/SeeWhereVideo'

export const HomeContFoot = () => {
    return (
        <>
            {/* <NavBar /> */}
            {/* <AppRouter /> */}
            <Header />
            {/* <GetAhead />
            <SeeWhere />
            <LearnFrom />
            <SeeWhereVideo /> */}
            <ContactUs />
            <Footer />
        </>
    )
}
