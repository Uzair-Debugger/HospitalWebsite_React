import React from "react";

const Appointment = () => {
  return (
    <div className="px-2">
      <img src="" alt="" />
      <div className="w-full text-center p-8 text-3xl fira-sans font-bold bg-[#4fb8bd] text-white">
        Book an appointment
      </div>

      <div className="max-w-xl mx-auto bg-white shadow-md rounded-md my-10 border border-[#4fb8bd]">
        <div className="w-full h-12 bg-[#4fb8bd] p-3 text-white font-semibold fira-sans">Request an Appointment</div>
        <form className="p-6 space-y-4">
          
          <select
            name="Doctors"
            id="doctors"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled selected>Choose Doctor</option>
            <option value="Tariq">Dr. Tariq Jan</option>
            <option value="Zia">Dr. Zia Darman</option>
            <option value="Arshad">Dr. Arshad Khan</option>
            <option value="Rehman">Dr. Rehman Siddiqui</option>
            <option value="Hamza">Dr. Hamza Shah</option>
          </select>

          
          <div className="flex flex-col min-[580px]:flex-row min-[580px]:gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full min-[580px]:w-1/2 p-2 border border-gray-300 rounded mb-4 min-[580px]:mb-0"
            />
            <input
              type="text"
              placeholder="Patient’s Age"
              className="w-full min-[580px]:w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded"
          />

          
          <div className="flex flex-col min-[580px]:flex-row min-[580px]:gap-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full min-[580px]:w-1/2 p-2 border border-gray-300 rounded mb-4 min-[580px]:mb-0"
            />
            <input
              type="text"
              placeholder="Confirm Phone Number"
              className="w-full min-[580px]:w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          
          <textarea
            placeholder="Write Your Message Here"
            className="w-full p-2 border border-gray-300 rounded h-28 resize-none"
          ></textarea>

          <button className=" bg-orange-600  hover:bg-[#4fb8bd] text-white font-semibold px-4 py-1.5 rounded-3xl cursor-pointer fira-sans text-[18px]">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
