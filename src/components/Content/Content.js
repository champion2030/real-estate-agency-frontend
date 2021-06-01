import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Register from "../Authorization/Register";
import Login from "../Authorization/Login";

const Content = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/login"]} component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Redirect to="/login"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Content;