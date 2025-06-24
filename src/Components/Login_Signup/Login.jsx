import React, { useState } from "react";
import Signup from "./Signup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import Profile from "./Profile";
// import Home from '../Body/Home'

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
        await signInWithEmailAndPassword(auth, Email, Password);
    console.log("LoggedIn Successfully")
    window.location.href ="./home"
    
    toast.success("LoggedIn Successfully",{
        position:'top-center',
    })
    } catch (error) {
        console.log(error.message)
        toast.error(error.message,{
            position:'bottom-center',
        })
    }
  };

  const HandleGuestMode = () => {
    window.location.href = "./home";
  };

  return (
    <form
      onSubmit={HandleLogin}
      className="py-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md px-15 border border-[#0d6efd]"
    >
      <h3 className="text-center text-xl font-semibold font-sansfira">Login</h3>
      <div>
        <div className="flex flex-col my-5 gap-1">
          <label className="font-semibold text-[17px]">Email</label>
          <input
            type="email"
            className="border-[1px] border-gray-400 outline-blue-500 outline-[1px] text-[17px] px-3 py-1 rounded-sm"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-5 gap-1">
          <label className="font-semibold text-[17px]">Password</label>
          <input
            type="password"
            className="border-[1px] border-gray-400 outline-blue-500 outline-[1px] text-[17px] px-3 py-1 rounded-sm"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <p className="text-xs">New user <a href='/signup' className="text-[#0d6efd] cursor-pointer">Register here</a></p>
      <button
        type="submit"
        className="text-center w-full mt-5 bg-[#0d6efd] rounded-sm text-white font-semibold text-xl p-1 hover:bg-white hover:text-[#0d6efd] cursor-pointer border-1 border-[#0d6efd]"
      >
        Login
      </button>
      <button
        type="button"
        onClick={HandleGuestMode}
        className="text-center w-full mt-3 bg-gray-500 rounded-sm text-white font-semibold text-xl p-1 hover:bg-white hover:text-gray-500 cursor-pointer border-1 border-gray-500"
      >
        Continue as Guest
      </button>
    </form>
  );
};

export default Login;