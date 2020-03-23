import React from 'react';
//import FacebookLogin from 'react-facebook-login' // <-- for the defaulkt button
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios';


const Facebook = ({informParent = f => f }) => {
    const responseFacebook = (response) => {
        console.log(response);
        // axios({
        //     method: 'POST',
        //     url:`${process.env.REACT_APP_API}/google-login`,
        //     data:{idToken: response.tokenId},
        // })
        // .then(response=>{
        //     console.log('Google Signin Success', response)
        //     // inform parent component //<-- we need to pass all the helpers before for we can save the user in the database as the others accounts.
        //     informParent(response);
        
        // })
        // .catch(error=>{
        //     console.log('Google Signin Error', error.response)
        // })
    }


    return (
        <div className="pb-3">
            <FacebookLogin
            // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
            autoLoad={false}
            callback={responseFacebook}
            render={renderProps => (
                    <button onClick={renderProps.onClick} className="btn btn-primary btn-lg btn-block">
                        <i className="fa fa-facebook pr-2"></i> Login with Facebook
                    </button>
                )}
          />
        
        </div>
    )

}

export default Facebook