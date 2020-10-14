import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LearnFrom } from '../components/learnFrom/LearnFrom'
import { NavBar } from '../components/navBar/NavBar'
import { SeeWhere } from '../components/seeWhere/SeeWhere'
import { SeeWhereVideo } from '../components/seeWhereVideo/SeeWhereVideo'

export const OcultRouter = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/HARDRIGTH-REACT/ocult/solutions" component={SeeWhere} />
                <Route exact path="/HARDRIGTH-REACT/ocult/demo" component={LearnFrom} />
                <Route exact path="/HARDRIGTH-REACT/ocult/services" component={SeeWhereVideo} />
            </Switch>
        </div>
    )
}