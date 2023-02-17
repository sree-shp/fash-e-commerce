import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h1 className="login-heading">LOGIN</h1>
      <form>
        <label className="email-label">Email</label>

        <input type="text" className="email" placeHolder="E-mail address" />
        <br />
        <label className="password-label">Password</label>

        <input type="password" className="password" placeHolder="Password" />
        <br />
        <button type="submit" className="login-button">
          Continue
        </button>
      </form>

      <p className="login-alternate">
        If you don't have an account, <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
