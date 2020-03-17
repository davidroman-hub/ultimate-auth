import React,{Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom'



const Layout = ({children,match}) => {

const isActive = path => {
    if(match.path === path) {
        return {color:'#000'}
    } else{
        return {color:'#fff'}
    }
};


    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link to='/' className=" nav-link" style={isActive('/')}>
                         {/* home / {JSON.stringify(history)}     */}
                         home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/signup' className=" nav-link" style={isActive('/signup')}> SignUp </Link>
                </li>
                <li className="nav-item">
                    <Link to='/signin' className=" nav-link" style={isActive('/signin')}> SignIn </Link>
                </li>
        </ul>
    )
    return(
        <Fragment>
            {nav()}
            <div  className="container"
            >
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter(Layout);