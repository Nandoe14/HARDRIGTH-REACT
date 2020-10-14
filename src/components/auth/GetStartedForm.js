import React from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import { Button } from '../buttons/Button'
import { removeError, setError } from '../../actions/ui'
import Swal from 'sweetalert2'

export const GetStartedForm = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    })

    const { name, lastname, email, phone, password, password2 } = formValues

    const formTypes = ['text', 'text', 'email', 'tel', 'password', 'password']
    const formFields = ['first name', 'last name', 'email', 'phone number', 'password', 'confirm password']
    const formNames = ['name', 'lastname', 'email', 'phone', 'password', 'password2']
    const formValuesArray = [name, lastname, email, phone, password, password2]

    const handleRegister = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const errorPop = (error) => {
        Swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Acept'
        })
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'))
            errorPop('Name is required')
            return false
        } else if (lastname.trim().length === 0) {
            dispatch(setError('Last Name is required'))
            errorPop('Last Name is required')
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Unvalid email format'))
            errorPop('Unvalid email format')
            return false
        } else if (!validator.isNumeric(phone)) {
            dispatch(setError('Unvalid phone format'))
            errorPop('Unvalid phone format')
            return false
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'))
            errorPop('Password should be at least 6 characters and match each other')
            return false
        }

        dispatch(removeError())

        return true
    }

    return (
        <div className="form-info">
            <form onSubmit={handleRegister}>
                {
                    formFields.map((und, index) =>
                        <div className="reg-cont" key={und}>
                            <span>{und}</span>
                            <input
                                type={formTypes[index]}
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
