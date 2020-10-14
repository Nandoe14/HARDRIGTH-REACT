import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

export const AuthRouter = () => {
    return (
        <div>
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
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}