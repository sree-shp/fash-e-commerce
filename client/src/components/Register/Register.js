import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <h1 className="register-heading">REGISTER</h1>
      <form>
        <label className="email-label">Email</label>

        <input type="text" className="email" placeHolder="E-mail address" />
        <br />
        <label className="password-label">Password</label>

        <input type="password" className="password" placeHolder="Password" />
        <br />
        <label className="password-label">Confirm Password</label>

        <input
          type="password"
          className="password"
          placeHolder=" Re-type Password"
        />
        <br />
        <button type="submit" className="register-button">
          Continue
        </button>
      </form>

      <p className="register-alternate">
        If you already have an account,
        <Link to="/register">Login</Link>
      </p>
    </div>
  );
}

export default Register;
