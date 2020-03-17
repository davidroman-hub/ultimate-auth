import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Routes
import App from './App'


//Auth
import Signup from './auth/Signup'
import Signin from './auth/Signin'


const Routes = () => {
return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
