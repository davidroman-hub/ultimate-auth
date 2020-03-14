import React,{useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Signup = () => {

    const [values, setValues] = useState ({
        name:"",
        email:"",
        password:"",
        buttonText:"Submit"
    });

    const {name, email, password, buttonText} = values

const handleChange = (name) => (event) => {
    //    
}

const clickSubmit = (event) => {
//
}

    const signupForm = () => {
        return (
            <form>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                        <input onChange={handleChange('name')}  values={name} type="text" className='form-control'/>
                </div> 
                <div className="form-group">
                    <label className="text-muted">Email</label>
                        <input onChange={handleChange('email')} value={email} type="email" className='form-control'/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                        <input onChange={handleChange('password')} value={password} type="Password" className='form-control'/>
                </div>   
                <div >
                    <button className="btn btn-primary" onclick={clickSubmit()}>
                        {buttonText}
                    </button>
                </div>
            </form>
        )
    }


    return (
        <Layout>
           <div className=" col-d-6 offset-md-1">
           <ToastContainer/>
            <h1 className='p-5 text-center'>Sign up</h1>
            {signupForm()}
           </div>
        </Layout>
    )
}

export default Signup