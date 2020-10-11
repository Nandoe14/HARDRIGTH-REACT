import React from 'react'
import { useForm } from '../../hooks/useForm'
import { Button } from '../buttons/Button'

export const GetStartedForm = () => {

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        insurance: '',
        zipcode: ''
    })

    const { name, lastname, email, phone, insurance, zipcode } = formValues

    const formFields = ['first name', 'last name', 'email', 'phone number', 'insurance (Opcional)', 'zip code']
    const formNames = ['name', 'lastname', 'email', 'phone', 'insurance', 'zipcode']
    const formValuesArray = [name, lastname, email, phone, insurance, zipcode]

    const handleSubmit = (e) => {
        e.preventDefault()
        reset()
    }

    return (
        <div className="form-info">
            <form onSubmit={handleSubmit}>
                {
                    formFields.map((und, index) =>
                        <div className="reg-cont" key={und}>
                            <span>{und}</span>
                            <input
                                type="text"
                                name={formNames[index]}
                                value={formValuesArray[index]}
                                onChange={handleInputChange}
                            />
                        </div>
                    )
                }
                <Button content="get started" />
            </form>
        </div>
    )
}
