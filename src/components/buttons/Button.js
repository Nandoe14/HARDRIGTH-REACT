import React from 'react'

export const Button = ({ content, id }) => {
    return (
        <button id={id} className="general">{content}</button>
    )
}
