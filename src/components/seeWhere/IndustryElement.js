import React from 'react'

export const IndustryElement = ({ industry, state, setState, visualChanges }) => {

    const handleClickTypeIndustry = (industry) => {
        document.querySelector('.divselect').classList.add("select-selected")
        setState(state => ({
            ...state,
            isearch: '',
            select: industry
        }))
        visualChanges()
    }

    const { itemShowed } = state

    return (
        (itemShowed)
        &&
        (<div
            className="selectlist"
            key={industry}
            onClick={() => handleClickTypeIndustry(industry)}
        >
            <span>{industry}</span>
        </div>)
    )
}
