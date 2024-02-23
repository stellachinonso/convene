import React, { useState } from "react";
import "./SigninForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { MdEmail } from "react-icons/md";
const SigninForm = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="wrapper">
      <form>
        <h1>{action}</h1>
        {action === "Sign In" ? (
          <div></div>
        ) : (
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              required
            />
            <FaUser className="icon" />
          </div>
        )}

        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
          />
          <MdEmail className="icon" />
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
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a>Forgot password?</a>
          </div>
        )}

        <div className="submit-containers">
          <div
            className={action === "Sign In" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign In");
            }}
          >
            Sign In
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
