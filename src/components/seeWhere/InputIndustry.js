import React from 'react'

export const InputIndustry = ({ isearch, handleInputChange }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="inputIndustry"
                type="text"
                name="isearch"
                placeholder="Search"
                autoComplete="off"
                value={isearch}
                onChange={handleInputChange}
            />
        </form>
    )
}
