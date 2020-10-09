import React from 'react'
import { GetAhead } from './components/getAhead/GetAhead'
import { Header } from './components/header/Header'
import { LearnFrom } from './components/learnFrom/LearnFrom'
import { NavBar } from './components/navBar/NavBar'
import { SeeWhere } from './components/seeWhere/SeeWhere'
import { SeeWhereVideo } from './components/seeWhereVideo/SeeWhereVideo'

export const HardRigth = () => {
    return (
        <>
            <NavBar />
            <Header />
            <GetAhead />
            <SeeWhere />
            <LearnFrom />
            <SeeWhereVideo />
        </>
    )
}
