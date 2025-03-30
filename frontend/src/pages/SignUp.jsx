import React from "react";

const SignUp = () => {
  return (
    <div className="container w-screen h-screen flex items-center justify-center flex-col">
      <form className="w-[24vw] h-[40vh] flex flex-col bg-[#0a0a0a] p-[20px] rounded-xl shadow-xl shadow-black/50">
        <h3 className="text-2xl">SignUp Form</h3>

        <div className="inputBox">
          <input type="text" placeholder="Full Name" required />
        </div>

        <div className="inputBox">
          <input type="email" placeholder="Email" required />
        </div>

        <div className="inputBox">
          <input type="password" placeholder="Password" required />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
