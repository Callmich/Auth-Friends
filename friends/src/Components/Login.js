import React, { useState } from 'react';

import { axiosWithAuth } from '../Utils/axiosWithAuthority';

const Login = () => {

    const [cred, setCred] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    const handleChange = e => {
        setCred({
            credentials: {
                ...cred.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitLog = e => {
        e.preventDefualt();
        axiosWithAuth()
        //put in post request here
        //consolelog res to find where how payload for token needs to be set
        //set token in localstorage
        //then history push to friends page
        //add a catch just in case
    }

    return (
      <div>
        <form onSubmit={submitLog}>
            <input
                type="text"
                name="username"
                id="username"
                value={cred.credentials.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                id="password"
                value={cred.credentials.password}
                onChange={handleChange}
            />
            <button>Log In</button>
        </form>
      </div>
    )
}

export default Login