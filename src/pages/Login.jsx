import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>

            <div className='lpg'>
                <div className='frm'>
                    <form id='lgin'>
                        <h2>Login</h2>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" placeholder='Enter email' id='email' /><br /><br />
                        <label htmlFor="pass">Password:</label><br />
                        <input type="password" placeholder="Enter password"id='pass' /><br /><br />
                        <input type="checkbox" id="show" />
                        <label htmlFor="show">Show password</label><br /><br />
                        <button id='si'>SIGN IN</button> <br /><br />
                        <div className="fp">Forgot <a href="none">Username/Password</a></div><br />
                        <div className="da">Dont have an account ? <a href="none">Sign up</a></div>
                    </form>
                </div>
            </div>

</>
  )
}

export default Login