import React, { useState, useEffect } from "react";
import Main_img from "../../assets/main.jpg";
import eye from "../../assets/eye.jpg";
import dentist from "../../assets/dentist.jpg";
import dentist2 from "../../assets/dentist2.jpg";
import doctor from "../../assets/doctor.png"
import eye2 from "../../assets/eye.png"
import microscope from "../../assets/microscope.png"
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
  let [Cur_index, setCur_index] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCur_index((prevIndex) => (prevIndex + 1) % 3); // cycles 0→1→2→0
    }, 3000);

    return () => clearTimeout(timer);
  }, [Cur_index]);

  return (
    <section className=" w-full p-2 overflow-x-hidden">
      <div className="relative max-[605px]:h-[83vh] max-[900px]:h-[78vh] h-[76vh] flex overflow-scroll">
        <img
          src={Main_img}
          alt=""
          className={`w-full h-full brightness-70 object-cover object-center min-[1150px]:object-[center_35%] rounded-sm
           ${Cur_index === 0 ? "" : "hidden"}`}
        />
        <img
          src={eye}
          alt=""
          className={`w-full h-full brightness-70 object-cover object-center min-[1150px]:object-[center_35%] rounded-sm
           ${Cur_index === 1 ? "" : "hidden"}`}
        />
        <img
          src={dentist}
          alt=""
          className={`w-full h-full brightness-70 object-cover object-center min-[1150px]:object-[center_35%] rounded-sm
           ${Cur_index === 2 ? "" : "hidden"}`}
        />
      </div>
      <div className="text-center px-1 w-full absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white min-[430]:text-[15px]">
        <div className="text-3xl">
          Cutting edge Healthcare by Internationally Trained Renowned Doctors
        </div>
        <div>
          We take pride in offering one of the most advanced Health-care
          services available in Pakistan
        </div>
        <NavLink to="/appointment">
          <button className="py-2  rounded-md px-5 bg-[#4fb8bd] hover:text-[#4fb8bd] hover:bg-white cursor-pointer text-white font-semibold max-[320px]:mt-4 max-[700px]:mt-7 max-[1600px]:mt-15">
            Request Appointment
          </button>
        </NavLink>
      </div>

      <div className="bg-[#4fb8bd] w-[95vw] m-auto text-white relative -top-2 p-7 rounded-sm font-semibold max-w-screen-xl">
        <h1 className="text-[25px] fira-text mb-7 mt-3">Why choose us</h1>
        <div className="grid gap-10 min-[660px]:grid-cols-2 min-[1000px]:grid-cols-3">
          <div className="flex gap-2">
            <div className=" w-[50px] h-[50px] rounded-[3px] bg-white shrink-0 pt-1 flex align-middle justify-center">
              <img src={doctor} alt="" className="w-[80%] h-[80%]"/>
              
            </div>
            <div>
              <span className="block text-xl">Expertise You can trust</span>
              Our highly qualified and internationally trained medical
              professionals bring years of experience and a deep commitment to
              patient care.
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] rounded-[3px] bg-white shrink-0 pt-1 flex align-middle justify-center">
              <img src={eye2} alt="" className="w-[80%] h-[80%]"/>
            </div>
            <div>
              <span className="block text-xl">Quality Service</span>
              We are dedicated to providing compassionate, patient-centered care
              with a focus on excellence and personalized treatment plans.
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] rounded-[3px] bg-white shrink-0 pt-1 flex align-middle justify-center">
              <img src={microscope} alt="" className="w-[80%] h-[80%]"/>
            </div>
            <div>
              <span className="block text-xl">Modern Technology</span>
              Utilizing the latest medical advancements and state-of-the-art
              equipment to ensure accurate diagnoses and effective treatments.
            </div>
          </div>
        </div>
      </div>

      <div className="grid p-5 min-[1000px]:grid-cols-2 max-w-screen-xl m-auto">
        <div className="w-full rounded-md h-full grid place-items-center">
          <img src={dentist2} alt="" className="rounded-md aspect-[4/3]" />
        </div>
        <div className="p-4">
          <div className="about-us-title text-[#4fb8bd] font-semibold fira-text text-xl mt-6 mb-3">
            ABOUT US
          </div>
          <p>
            CityCare General Hospital is a state-of-the-art healthcare facility
            located in Defence, Karachi. Our team comprises highly qualified and
            internationally trained doctors, surgeons, and medical professionals
            committed to delivering comprehensive and compassionate care. We
            offer a full range of medical and surgical services, covering
            various specialties such as internal medicine, cardiology,
            orthopedics, general surgery, pediatrics, gynecology, and emergency
            care. Our goal is to provide accessible, high-quality healthcare in
            a safe and patient-centered environment.
          </p>
          <div className="grid max-[599px]:grid-cols-1 max-[900px]:grid-cols-2 min-[901px]:grid-cols-3 gap-4">
            <ul className="list-disc list-outside marker:text-[#4fb8bd] bg-white p-3 rounded">
              <li>General Health Checkups</li>
            </ul>
            <ul className="list-disc list-outside marker:text-[#4fb8bd] bg-white p-3 rounded">
              <li>Diagnostic Laboratory Services</li>
            </ul>
            <ul className="list-disc list-outside marker:text-[#4fb8bd] bg-white p-3 rounded">
              <li>Outpatient and Inpatient Services</li>
            </ul>
            <ul className="list-disc list-outside marker:text-[#4fb8bd] bg-white p-3 rounded">
              <li>Minor and Major Surgeries</li>
            </ul>
            <ul className="list-disc list-outside marker:text-[#4fb8bd] bg-white p-3 rounded">
              <li>Chronic Disease Management</li>
            </ul>
            <ul className="list-disc list-outside marker:text-[#4fb8bd] bg-white p-3 rounded">
              <li>Maternal and Child Healthcare</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="other services">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="achivements"></div>

      <div className="Recommandation by greats"></div>
    </section>
  );
};

export default Hero;
