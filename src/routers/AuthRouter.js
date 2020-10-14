import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import { NavBar } from '../components/navBar/NavBar'

export const AuthRouter = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route
                    exact
                    path="/HARDRIGTH-REACT/auth/login"
                    component={Login}
                />
                <Route
                    exact
                    path="/HARDRIGTH-REACT/auth/register"
                    component={Register}
                />
                <Redirect to="/HARDRIGTH-REACT/auth/login" />
            </Switch>
        </div>
    )
}