import React from 'react'
import { useForm } from '../../hooks/useForm'
import { Button } from '../buttons/Button'

export const ContactForm = () => {

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const { name, email, phone, message } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" maxLength="40" required value={name} onChange={handleInputChange} />
            <hr />
            <input name="email" type="text" placeholder="Email" maxLength="40" required value={email} onChange={handleInputChange} />
            <hr />
            <input name="phone" type="tel" placeholder="Phone" maxLength="16" required value={phone} onChange={handleInputChange} />
            <hr />
            <span>How would you like us to respond?</span>

            <input name="respond" type="radio" value="email" />
            <label htmlFor="">Email</label>

            <input name="respond" type="radio" value="phone" />
            <label htmlFor="">Phone</label>

            <input name="message" type="text" placeholder="Message" maxLength="100" required value={message} onChange={handleInputChange} />
            <hr />
            <Button id="contact-button" content="submit" />
        </form>
    )
}
