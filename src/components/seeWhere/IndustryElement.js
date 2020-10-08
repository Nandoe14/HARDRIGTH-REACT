import React from 'react'

export const IndustryElement = ({ industry, setState, visualChanges }) => {

    const handleClickTypeIndustry = (industry) => {
        console.log('industry: ' + industry)
        setState(state => ({
            ...state,
            select: industry
        }))
        visualChanges()
    }

    return (
        <div
            className="selectlist"
            key={industry}
            onClick={() => handleClickTypeIndustry(industry)}
        >
            <span>{industry}</span>
        </div>
    )
}
