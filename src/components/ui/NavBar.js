import React, { useState } from 'react'
import logo1 from './../../assets/logo.svg'
import logo2 from './../../assets/Logo_Fixed_Header.svg'
import menuicon from './../../assets/Hamburger_menu_icon.svg'
import closeVideo from './../../assets/close_icon_2.svg'
import { Button } from '../buttons/Button'

import { Link } from "react-router-dom";

export const NavBar = () => {

    const [state, setState] = useState({
        menuHamburgerShowed: true,
    })

    const { menuHamburgerShowed } = state

    const handleClick = () => {
        document.querySelector(".menu-list").classList.toggle("show-list")
        setState({
            menuHamburgerShowed: !menuHamburgerShowed
        })
    }

    const visualChangesTop = () => {
        const itemLinkNavBar = document.querySelectorAll(".link-nav-bar")
        document.querySelectorAll(".navbar")[0].classList.toggle("changes-nav-bar")
        document.querySelector("#nav-button").classList.toggle("changes-button-nav-bar")
        document.querySelector("#logo-blue").classList.toggle("show-block")
        document.querySelector("#logo-white").classList.toggle("show-none")
        for (let j = 0; j < itemLinkNavBar.length; j++) {
            itemLinkNavBar[j].classList.toggle("changes-text-nav-bar")
        }
    }

    const visualChangesDown = () => {
        const itemLinkNavBar = document.querySelectorAll(".link-nav-bar")
        document.querySelectorAll(".navbar")[0].classList.add("changes-nav-bar")
        document.querySelector("#nav-button").classList.add("changes-button-nav-bar")
        document.querySelector("#logo-blue").classList.add("show-block")
        document.querySelector("#logo-white").classList.add("show-none")
        for (let j = 0; j < itemLinkNavBar.length; j++) {
            itemLinkNavBar[j].classList.add("changes-text-nav-bar")
        }
    }

    // Tarea: Amarrar el handleEvent al url products o /

    const handleEvent = () => {
        if (window.scrollY === 0 && window.innerWidth > 768) {
            visualChangesTop()
        }
        if (window.scrollY > 0 && window.innerWidth > 768) {
            visualChangesDown()
        }
    }

    window.addEventListener('scroll', handleEvent)

    return (
        <section className="navbar">
            <div className="container1">
                <div className="logos-cont">
                    <img id="logo-white" className="" src={logo1} alt="HARDRIGTH" />
                    <img id="logo-blue" className="show-none" src={logo2} alt="HARDRIGTH" />
                    {
                        (menuHamburgerShowed)
                            ?
                            (<img id="menu-icon" src={menuicon} alt="Menu" onClick={handleClick} />)
                            :
                            (<img id="close-icon" src={closeVideo} alt="X" onClick={handleClick} />)
                    }
                </div>
                <nav>
                    <ul className="menu-list">
                        <li><Link className="link-nav-bar" to="/products">products</Link></li>
                        <li><Link className="link-nav-bar" to="/pricing">pricing</Link></li>
                        <li><Link className="link-nav-bar" to="/solutions">solutions</Link></li>
                        <li><Link className="link-nav-bar" to="/demo">demo</Link></li>
                        <li><Link className="link-nav-bar" to="/services">services</Link></li>
                        <li><Link to="/register"><Button id="nav-button" content="get started" /></Link></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

