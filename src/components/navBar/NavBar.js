import React from 'react'
import logo from './../../assets/logo.svg'

export const NavBar = () => {
    return (
        <section className="navbar">
            <div className="container1">
                <img src={logo} alt="HARDRIGTH" />
                <nav>
                    <ul>
                        <li><a href="#">products</a></li>
                        <li><a href="#get-ahead">pricing</a></li>
                        <li><a href="#learn-from">solutions</a></li>
                        <li><a href="#video">demo</a></li>
                        <li><a href="#see-where">services</a></li>
                        <li><button>get started</button></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

