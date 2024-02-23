import React from "react";
import "./SigninForm.css";
import { FaUser, FaLock } from "react-icons/fa";
const SigninForm = () => {
  return (
    <div className="wrapper">
      <form>
        <h1>Sign In</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Username"
            id="email"
            name="email"
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            required
          />{" "}
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Sign In</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
