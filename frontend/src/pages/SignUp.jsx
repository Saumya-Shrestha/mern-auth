import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container w-screen h-screen flex items-center justify-center flex-col">
      <form className="w-[24vw] h-[fit] flex flex-col bg-[#0a0a0a] p-[20px] rounded-xl shadow-xl shadow-black/50">
        <h3 className="text-2xl mb-3">SignUp Form</h3>

        <div className="inputBox">
          <input type="text" placeholder="Full Name" required />
        </div>

        <div className="inputBox">
          <input type="email" placeholder="Email" required />
        </div>

        <div className="inputBox">
          <input type="password" placeholder="Password" required />
        </div>

        <p className="text-[gray] text-[14px] mt-2">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>

        <button className="btnNormal bg-blue-500 transition-all hover:bg-blue-600 mt-2 rounded-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
