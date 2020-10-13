import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config'
import { GetAhead } from '../components/getAhead/GetAhead';
import { HomeContFoot } from '../components/HomeContFoot';
import { NavBar } from '../components/navBar/NavBar';
import { login } from '../actions/auth';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { OcultRouter } from './OcultRouter';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [cheking, setCheking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }

            setCheking(false)

        })
    }, [dispatch, setCheking, setIsLoggedIn])

    if (cheking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomeContFoot} />
                    <Route exact path="/products" component={HomeContFoot} />
                    <Route exact path="/pricing" component={GetAhead} />

                    <PrivateRoute path="/ocult" component={OcultRouter} isAuthenticated={isLoggedIn} />
                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn} />

                    <Redirect to="/" />
                </Switch>
            </div >
        </Router >
    )
}
