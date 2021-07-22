import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  return (
    <div className="signup-view">
      <div className="signup-container">
        <h1>Sign up</h1>
        <input type="text" name="name" placeholder="Name" />

        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
        />

        <button className="signup-button">
          <span>Sign up</span>
        </button>
        <div className="login-link">
          <p>Already a member?</p>
          <Link to="/">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
