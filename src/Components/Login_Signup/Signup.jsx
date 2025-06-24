import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Signup = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const HandleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          Email: user.email,
          FirstName: fname,
          LastName: lname,
        });
      }
      toast.success("User Registered Successfully", {
        position: "top-center",
      });
      window.location.href ="./home"
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const HandleGuestMode = () => {
    window.location.href = "./home";
  };

  return (
    <form
      onSubmit={HandleSignup}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md px-15 py-5 border border-[#0d6efd]"
    >
      <h3 className="text-center text-xl font-semibold font-sansfira">Signup</h3>
      <div>
        <div className="flex flex-col my-5 gap-1">
          <label className="font-semibold text-[17px]">First Name</label>
          <input
            type="text"
            className="border-[1px] border-gray-400 outline-blue-500 outline-[1px] text-[17px] px-3 py-1 rounded-sm"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-5 gap-1">
          <label className="font-semibold text-[17px]">Last Name</label>
          <input
            type="text"
            className="border-[1px] border-gray-400 outline-blue-500 outline-[1px] text-[17px] px-3 py-1 rounded-sm"
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-5 gap-1">
          <label className="font-semibold text-[17px]">Email</label>
          <input
            type="email"
            className="border-[1px] border-gray-400 outline-blue-500 outline-[1px] text-[17px] px-3 py-1 rounded-sm"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-5 gap-1">
          <label className="font-semibold text-[17px]">Password</label>
          <input
            type="password"
            className="border-[1px] border-gray-400 outline-blue-500 outline-[1px] text-[17px] px-3 py-1 rounded-sm"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <p className="text-xs">
        Already have an account?{" "}
        <NavLink to="/" className="text-[#0d6efd] cursor-pointer">
          Login here
        </NavLink>
      </p>
      <button
        type="submit"
        className="text-center w-full mt-5 bg-[#0d6efd] rounded-sm text-white font-semibold text-xl p-1 hover:bg-white hover:text-[#0d6efd] cursor-pointer border-1 border-[#0d6efd]"
      >
        Signup
      </button>
      <button
        type="button"
        onClick={HandleGuestMode}
        className="text-center w-full mt-3 bg-gray-500 rounded-sm text-white font-semibold text-xl p-1 hover:text-gray-500 hover:bg-white cursor-pointer border-1 border-gray-500"
      >
        Continue as Guest
      </button>
    </form>
  );
};

export default Signup;
