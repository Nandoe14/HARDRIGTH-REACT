import React from 'react'
import { GetAhead } from './components/getAhead/GetAhead'
import { Header } from './components/header/Header'
import { NavBar } from './components/navBar/NavBar'
import { SeeWhere } from './components/seeWhere/SeeWhere'

export const HardRigth = () => {
    return (
        <>
            <NavBar />
            <Header />
            <GetAhead />
            <SeeWhere />
        </>
    )
}
