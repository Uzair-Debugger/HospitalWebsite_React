import React from "react";
import servicesBanner from "../../assets/dentist.jpg"; 
import childHealth from '../../assets/services/childspecialist.jpg'
import dentistry from '../../assets/services/dentist.jpg'
import emergency from '../../assets/services/emergency.jpg'
import orthopedicsImg from '../../assets/services/orthopologist.jpg'
import xray from '../../assets/services/mri.jpg'
import cardiologist from '../../assets/services/cardiologist.jpeg'

const OurServices = () => {
  const services = [
    {
      id: 1,
      name: "Child Health Care",
      description: "Comprehensive medical care for infants, children, and adolescents, focusing on growth, development, and preventive health.",
      image: childHealth,
    },
    {
      id: 2,
      name: "Dental Services",
      description: "Complete dental solutions including routine check-ups, cleaning, fillings, and advanced cosmetic procedures.",
      image: dentistry,
    },
    {
      id: 3,
      name: "MRI Facilities",
      description: "State-of-the-art diagnostic imaging services providing accurate and detailed insights for various medical conditions.",
      image: xray,
    },
    {
      id: 4,
      name: "Emergency Services",
      description: "24/7 immediate medical attention for critical conditions and urgent care needs.",
      image: emergency,
    },
    {
      id: 5,
      name: "Cardiology",
      description: "Specialized care for heart conditions, including diagnostics, treatment, and preventive cardiology.",
      image: cardiologist,
    },
    {
      id: 6,
      name: "Orthopedics",
      description: "Expert treatment for musculoskeletal system disorders, injuries, and joint replacements.",
      image: orthopedicsImg,
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-[630px]:h-[50vh] overflow-hidden">
        <img
          src={servicesBanner}
          alt="Our Services Banner"
          className="w-full h-full object-cover brightness-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <h1 className="text-4xl min-[630px]:text-5xl font-bold fira-text">
            Our Medical Services
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">Comprehensive Care for Your Well-being</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices; 