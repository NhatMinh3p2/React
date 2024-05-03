import React from "react"
import { Link } from "react-router-dom";



function Login () {
    return (
        <>
        <div className="wrapper">
    <div className="inside">
    <h2>Registration</h2>
  </div>
    <form action="#">
      <div className="input-box">
        <input type="text" placeholder="Enter your name" required />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" required />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" required />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Confirm password" required />
      </div>
      <div className="policy">
        <input type="checkbox" />
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Register Now" />
      </div>
      <div className="text">
        <h3>Already have an account? <Link to="/">Login now</Link></h3>
      </div>
    </form>
  </div>
        </>
    )
}

export default Login;