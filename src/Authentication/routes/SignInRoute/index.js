import React from "react";
import {Route} from "react-router-dom"
import {SIGN_IN_PATH} from "../../constants/SignInRouteConstants";
import {SignInRoute} from "./SignInRoute";
  
const routes = 
    <Route path={SIGN_IN_PATH} component={SignInRoute} />;

export {routes};
