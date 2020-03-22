import React from 'react';
import Layout from './core/Layout'

const App = () => {
  return (
    <Layout>
      <div className='col-md-6 offset-md-3 text-center'>
        <h1 className="p-5">React Node Mongo DB Authentication Boilerplate</h1>
        <h2>MERN stack</h2>
        <hr/>
        <p className='lead'>MERN stack login register system with account activasion,
        login with Facebook and google as well as private and protected routes for authentucated user and users
        with role of admin
        </p>
      </div>
    </Layout>
  )
}

export default App;
