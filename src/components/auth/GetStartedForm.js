import React from 'react'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import { Button } from '../buttons/Button'
import { removeError, setError } from '../../actions/ui'

export const GetStartedForm = () => {

    const dispatch = useDispatch()

    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: 'Hernando',
        lastname: 'Carbonell',
        email: 'nandoe@gmail.com',
        phone: '333333333',
        password: 'abc123',
        password2: 'abc123'
    })

    const { name, lastname, email, phone, password, password2 } = formValues

    const formFields = ['first name', 'last name', 'email', 'phone number', 'password', 'confirm password']
    const formNames = ['name', 'lastname', 'email', 'phone', 'password', 'password2']
    const formValuesArray = [name, lastname, email, phone, password, password2]

    const handleRegister = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Unvalid email format'))
            return false
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false
        }

        dispatch(removeError())

        return true
    }

    return (
        <div className="form-info">
            <form onSubmit={handleRegister}>
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
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
                <Button id="get-started-button" content="get started" />
            </form>
        </div>
    )
}
