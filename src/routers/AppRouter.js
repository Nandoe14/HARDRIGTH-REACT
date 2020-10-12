import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { GetAhead } from '../components/getAhead/GetAhead';
import { GetCare } from '../components/getCare/GetCare';
import { HomeContFoot } from '../components/HomeContFoot';
import { LearnFrom } from '../components/learnFrom/LearnFrom';
import { SeeWhere } from '../components/seeWhere/SeeWhere';
import { SeeWhereVideo } from '../components/seeWhereVideo/SeeWhereVideo';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/products" component={HomeContFoot} />
                    <Route exact path="/pricing" component={GetAhead} />
                    <Route exact path="/solutions" component={SeeWhere} />
                    <Route exact path="/demo" component={LearnFrom} />
                    <Route exact path="/services" component={SeeWhereVideo} />
                    <Route exact path="/register" component={GetCare} />

                    <Route exact path="/" component={HomeContFoot} />
                </Switch>
            </div >
        </Router >
    )
}
