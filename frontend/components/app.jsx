import React from "react";
import { Route, Switch } from "react-router";
import SplashContainer from "./splash/splash_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from "./main/main"
const App = () => (
    <div>
        {/* <Switch> */}
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path= "/channel" component={Main}/>
        {/* </Switch> */}
    </div>
);

export default App;