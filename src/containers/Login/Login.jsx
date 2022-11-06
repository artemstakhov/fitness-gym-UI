import React from 'react'

const Login = ({ onLogin }) => {
    return (
        <button onClick={() => { onLogin(true) }}>login</button>
    )
}

export default Login;