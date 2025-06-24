import React from "react";
import { useState } from "react";
import doctorsBanner from "../../assets/doctors/bg_doctors2.jpg";
import arshad from "../../assets/doctors/arshad(2).jpg";
import hamza from "../../assets/doctors/hamza.jpg";
import rahman from "../../assets/doctors/Rahman.jpg";
import tariq from "../../assets/doctors/tariq.jpg";
import elara from "../../assets/doctors/elara.jpg";
import sara from "../../assets/doctors/sana.jpg";

const OurDoctors = () => {
  const [SelectedDoctor, setSelectedDoctor] = useState(null);

  const Doctors = [
    {
      id: 1,
      Name: "Dr. Tariq Jan",
      Specialty: "Cardiologist",
      image: tariq,
      info: "Dr. Tariq Jan is a highly experienced cardiologist with over 15 years of practice, specializing in interventional cardiology and cardiac rhythm disorders. He is dedicated to providing comprehensive and compassionate care to his patients."
    },
    {
      id: 2,
      Name: "Dr. Elara Johns",
      Specialty: "Neurologist",
      image: elara,
      info: "Dr. Elara Johns is a leading neurologist focused on diagnosing and treating complex neurological conditions such as migraines, epilepsy, and multiple sclerosis. Her research contributes significantly to new treatment advancements."
    },
    {
      id: 3,
      Name: "Dr. Arshad Khan",
      Specialty: "Orthopedic Surgeon",
      image: arshad,
      info: "Dr. Arshad Khan is a skilled orthopedic surgeon specializing in joint replacement, sports injuries, and spinal surgeries. He emphasizes personalized treatment plans to help patients regain mobility and improve their quality of life."
    },
    {
      id: 4,
      Name: "Dr. Rahman Siddiqui",
      Specialty: "Pediatrician",
      image: rahman,
      info: "Dr. Rahman Siddiqui is a compassionate pediatrician who has been caring for children's health for two decades. He provides excellent care for infants, children, and adolescents, focusing on preventative medicine and holistic well-being."
    },
    {
      id: 5,
      Name: "Dr. Hamza Shah",
      Specialty: "General Physician",
      image: hamza,
      info: "Dr. Hamza Shah is a trusted general physician providing primary healthcare services. He focuses on disease prevention, health promotion, and managing chronic conditions, offering accessible and comprehensive care to the community."
    },
    {
      id: 6,
      Name: "Dr. Sara",
      Specialty: "Dermatologist",
      image: sara,
      info: "Dr. Sara is a board-certified dermatologist specializing in skin conditions, cosmetic dermatology, and skin cancer screenings. She is committed to helping her patients achieve healthy and radiant skin."
    },
  ];

  return (
    <section className="w-full">
      <div className="relative h-[40vh] min-[630px]:h-[50vh] overflow-hidden">
        <img
          src={doctorsBanner}
          alt="Our Doctors Banner"
          className="w-full h-full object-cover brightness-70 min-[900px]:object-[0%_20%] min-[200px]:object-[0%_50%]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <h1 className="text-4xl min-[630px]:text-5xl font-bold fira-text">
            Meet Our Expert Doctors
          </h1>
        </div>
      </div>

      <div className="py-12 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Dedicated to Your Health and Well-being
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
            >
              <img
                src={doctor.image}
                alt={doctor.Name}
                className={`w-full h-48 object-cover min-2xl:object-[30%_10%] object-top ${
                  doctor.Name === "Dr. Elara Johns"
                    ? "max-sm:object-cover max-sm:object-[10%_50%]"
                    : ""
                }`}
              />
              <div className="p-6 text-center">
                {/* Wrap the icon in a button for better accessibility */}
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="mb-2 inline-block text-gray-600 hover:text-[#4fb8bd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4fb8bd] rounded"
                  aria-label={`View details for Dr. ${doctor.Name}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" // Increased size
                    height="24" // Increased size
                    fill="currentColor"
                    className="bi bi-arrows-fullscreen"
                    viewBox="0 0 16 16" // Standard 16x16 viewbox for better scaling
                  >
                    <path
                      fillRule="evenodd" // Corrected attribute name
                      d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                    />
                  </svg>
                </button>

                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {doctor.Name}
                </h3>
                <p className="text-green-700 text-md font-medium">
                  {doctor.Specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {SelectedDoctor && (
          // Overlay
          <div
            className="fixed inset-0 bg-transparent backdrop-brightness-40 z-40 flex items-center justify-center p-4"
            onClick={() => setSelectedDoctor(null)} // Click overlay to close
          >
            {/* Modal Content */}
            <div
              className="bg-white rounded-lg shadow-2xl p-6 relative max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold p-1 leading-none"
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={SelectedDoctor.image}
                    alt={SelectedDoctor.Name}
                    className="object-cover object-center w-40 h-40 rounded-full mx-auto sm:mx-0 border-2 border-green-500" // Added rounded-full and border
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {SelectedDoctor.Name}
                  </h1>
                  <p className="text-lg text-green-700 font-semibold mb-4">
                    {SelectedDoctor.Specialty}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {SelectedDoctor.info}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurDoctors;