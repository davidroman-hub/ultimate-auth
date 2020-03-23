import React from 'react';
import GoogleLogin from 'react-google-login'
import axios from 'axios';
import {authenticate, isAuth} from './helpers'

const Google = () => {

    const responseGoogle = (response) => {
        console.log(response)
    }

    return (
        <div className="pb-3">
            <GoogleLogin
            // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )

}

export default Google