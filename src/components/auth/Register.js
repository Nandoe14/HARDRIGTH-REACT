import React from 'react'
import { GetStartedForm } from './GetStartedForm'

export const Register = () => {

    window.scrollTo(0, 0);

    return (
        <section className="getcare animate__animated animate__zoomIn animate__faster">
            <div className="form-box">
                <div className="info-cont">
                    <div>
                        <h2>Get Care Now</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum libero sit amet metus commodo lacinia.</span>
                        <GetStartedForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
