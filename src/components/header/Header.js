import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../buttons/Button'

export const Header = () => {
    return (
        <header>
            <div className="headcont animate__animated animate__slideInLeft animate__faster">
                <h1>HR software<br />that really matters</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                <Link to="/auth/register"><Button id="header-button" content="get started" /></Link>
            </div>
        </header>
    )
}
