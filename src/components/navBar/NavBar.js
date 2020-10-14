import React, { useLayoutEffect, useState } from 'react'
import logo1 from './../../assets/logo.svg'
import logo2 from './../../assets/Logo_Fixed_Header.svg'
import menuicon from './../../assets/Hamburger_menu_icon.svg'
import closeVideo from './../../assets/close_icon_2.svg'
import { Button } from '../buttons/Button'

import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

export const NavBar = () => {

    const { pathname } = useLocation()

    const [state, setState] = useState({
        menuHamburgerShowed: true,
    })

    const { menuHamburgerShowed } = state

    const { name } = useSelector(s => s.auth)

    const handleClick = () => {
        if (window.innerWidth <= 768) {
            document.querySelector(".menu-list").classList.toggle("show-list")
            setState({
                menuHamburgerShowed: !menuHamburgerShowed
            })
        }
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

    useLayoutEffect(() => {
        if (!(pathname === '/products' || pathname === '/')) {
            visualChangesDown()
        }
        const handleEvent = () => {
            if (pathname === '/products' || pathname === '/') {
                if (window.scrollY === 0 && window.innerWidth > 768) {
                    visualChangesTop()
                }
                if (window.scrollY > 0 && window.innerWidth > 768) {
                    visualChangesDown()
                }
            }
        }
        window.addEventListener('scroll', handleEvent)
        return () => {
            window.removeEventListener('scroll', handleEvent)
        };
    }, [pathname])

    return (
        <section className="navbar animate__animated animate__bounceInDown">
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
                        <li><Link className="link-nav-bar" to="/HARDRIGTH-REACT/products" onClick={handleClick}>products</Link></li>
                        <li><Link className="link-nav-bar" to="/HARDRIGTH-REACT/pricing" onClick={handleClick}>pricing</Link></li>
                        <li><Link className="link-nav-bar" to="/HARDRIGTH-REACT/ocult/solutions" onClick={handleClick}>solutions</Link></li>
                        <li><Link className="link-nav-bar" to="/HARDRIGTH-REACT/ocult/demo" onClick={handleClick}>demo</Link></li>
                        <li><Link className="link-nav-bar" to="/HARDRIGTH-REACT/ocult/services" onClick={handleClick}>services</Link></li>
                        <li><Link to="/HARDRIGTH-REACT/auth/register"><Button id="nav-button" content={`${(name) ? name : 'get started'}`} /></Link></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

