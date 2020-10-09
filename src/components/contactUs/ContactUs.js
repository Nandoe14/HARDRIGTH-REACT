import React, { useState } from 'react'
import circlePop from '../../assets/Group_14.svg'
import logo from '../../assets/Group_12.svg'
import { ContactForm } from './ContactForm'

export const ContactUs = () => {

    const [state, setState] = useState(false)

    const handleClickTogglePop = () => {
        setState(!state)
    }

    return (
        <section className="contactus">
            <div className="location">
                {
                    (state)
                    &&
                    (<div className="fields animate__animated animate__bounceIn">
                        <img src={logo} alt="H" />
                        <span>fields court station road</span>
                        <span>Epworth DN9 1JZ - United Kingdom Company Reg: 8202467</span>
                        <div className="triangulo"></div>
                    </div>)
                }
                <img className="popup" src={circlePop} alt="O" />
                <img className="popuph" src={circlePop} alt="O" onClick={handleClickTogglePop} />
            </div>

            <div id="contact">
                <div>
                    <h2>contact us</h2>
                    <span>Send us a message</span>
                    <ContactForm />
                </div>
            </div>
        </section >
    )
}
