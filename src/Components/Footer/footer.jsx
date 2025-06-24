import React from "react";
import footer_img from "../../assets/footer.jpg";
import logo from "../../assets/logo.png";
// import linkdin from "../../assets/linkedin.svg";
import { Link, NavLink } from "react-router-dom";
const footer = () => {
  return (
    <section className="w-full relative">
      <div className="w-full h-100">
        <img
          className="w-full h-full object-center object-cover min-[1400px]:object-[30%_65%] brightness-25"
          src={footer_img}
          alt="footer"
        />
      </div>

      <div className="absolute top-0 w-full px-7 max-[330px]:px-5.5 grid min-[800px]:grid-cols-2 h-full min-[800px]:pt-24 max-w-screen-xl">
        <div className="text-center text-white fira-text pt-2">
          <img src={logo} alt="" className="w-24 mx-auto max-[424px]:w-18 min-[800px]:mb-5" />
          <div className="w-full">
            We take pride in offfering one of the finest Health care services in
            Karachi
          </div>
        </div>

        <div className="text-white pt-2 min-[425px]:p-5 min-[800px]:px-11">
          <div className="fira-sans font-semibold text-xl min-[590px]:mb-5 text-green-500 min-[800px]:text-center">Quick Links</div>
          <ul className="grid min-[425px]:grid-cols-2 min-[800px]:grid-cols-1 min-[800px]:mx-auto min-[800px]:max-w-max">
            <NavLink to='/home'>
              <li className="hover:text-green-400 cursor-pointer list-disc list-outside marker:text-[#4fb8bd] pl-4">
              Home
            </li>
              </NavLink>
            <NavLink to='/doctors'>
              <li className="hover:text-green-400 cursor-pointer list-disc list-outside marker:text-[#4fb8bd] pl-4">
              Our Doctors
            </li>
              </NavLink>
            <NavLink to='/services'>
            <li className="hover:text-green-400 cursor-pointer list-disc list-outside marker:text-[#4fb8bd] pl-4">
              Our Services
            </li>
            </NavLink>
           
            <NavLink to='/Contact'>
              <li className="hover:text-green-400 cursor-pointer list-disc list-outside marker:text-[#4fb8bd] pl-4">
              Contact us
            </li>
              </NavLink>
            
          </ul>
        </div>

        <div className="text-center relative ">
          <NavLink to='/appointment' className={`text-white hover:text-green-600 font-semibold bg-green-600 hover:bg-white py-1 px-3 rounded-md mx-auto min-[800px]:absolute min-[800px]:top-1/2 min-[800px]:left-1/2 min-[800px]:-translate-x-1/2 min-[800px]:-translate-y-1/2`}>

          Book an Appointment
          </NavLink>
        </div>

        <div className="text-white pt-2 flex flex-col min-[430px]:gap-y-6">
          <div className="font-semibold text-xl fira-sans text-center text-green-500">
            Social Media Links
          </div>
          <div className="flex gap-3 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 p-1.5 cursor-pointer rounded-full hover:text-[#4fb8bd] text-white hover:bg-white bg-[#4fb8bd]"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 20 20"
              className="w-8 h-8 p-1.5 rounded-full cursor-pointer hover:text-[#4fb8bd] text-white hover:bg-white bg-[#4fb8bd]"
              fill="currentColor"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-facebook"
              className="w-8 h-8 p-1.5 rounded-full cursor-pointer hover:text-[#4fb8bd] text-white hover:bg-white bg-[#4fb8bd]"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
