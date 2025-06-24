import React from "react";
import contactBanner from "../../assets/contactus.jpg"; // Using main.jpg as a placeholder

const Contact = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-[630px]:h-[50vh] overflow-hidden">
        <img
          src={contactBanner}
          alt="Contact Us Banner"
          className="w-full h-full object-cover brightness-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <h1 className="text-4xl min-[630px]:text-5xl font-bold fira-text">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white py-12 px-4 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Address</h3>
          <p className="text-gray-700">123 Hospital Lane, Health City, Karachi, Pakistan</p>
        </div>
        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Phone</h3>
          <p className="text-gray-700">+92 123 4567890</p>
          <p className="text-gray-700">+92 987 6543210</p>
        </div>
        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Email</h3>
          <p className="text-gray-700">info@hospital.com</p>
          <p className="text-gray-700">support@hospital.com</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Send us a Message</h2>
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[50vh] bg-gray-200 flex items-center justify-center text-gray-600 flex-col">
        <p className="text-center text-red-600 text-sm mb-2 px-4">Disclaimer: The map below is for illustrative purposes only and does not represent the exact location of our facility.</p>
        <div style={{ width: '100%', height: '100%' }}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Liaquat%20National%20Hospital%20Karachi,%20Pakistan+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
