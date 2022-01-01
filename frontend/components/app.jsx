import React from "react";
import { Route, Switch } from "react-router";
import SplashContainer from "./splash/splash_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import HomeContainer from "./home/home_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
    <div>
        <h1>Datcord</h1>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/@me" component={HomeContainer} />
        </Switch>
    </div>
);

export default App;