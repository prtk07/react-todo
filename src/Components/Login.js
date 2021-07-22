import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-view">
      <div className="login-container">
        <h1>Login</h1>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <button className="login-button">
          <span>Login</span>
        </button>
        <div className="signup-link">
          <p>Not a member?</p>
          <Link to="/register">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
