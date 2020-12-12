import React from 'react'

export const Button = ({ content, id, classs = "general" }) => {
    return (
        <button id={id} className={classs}>{content}</button>
    )
}
