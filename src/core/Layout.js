import React,{Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom'



const Layout = ({children}) => {
    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link to='/' className="text-light nav-link"> home </Link>
                </li>
                <li className="nav-item">
                    <Link to='/signup' className="text-light nav-link"> SignUp </Link>
                </li>
                <li className="nav-item">
                    <Link to='/signin' className="text-light nav-link"> SignIn </Link>
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