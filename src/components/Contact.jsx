import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-yellow-500 tracking-[6px] uppercase text-sm mb-6">
          Book Appointment
        </p>

        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
          Let's Create Your Perfect Look
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
          Book your bridal, party or premium makeup session with
          Mithila Makeup Studio.
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          
          {/* Phone Card */}
          <div className="w-full md:w-105 bg-[#0b0b0b] border border-gray-800 rounded-[35px] p-10 hover:border-yellow-500 transition duration-300">
            <div className="flex justify-center mb-6">
              <Phone className="text-yellow-500 w-10 h-10" />
            </div>

            <h3 className="text-3xl font-serif text-yellow-500 mb-6">
              Phone
            </h3>

            <p className="text-gray-300 text-2xl">
              +91 77180 36089
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="w-full md:w-105 bg-[#0b0b0b] border border-gray-800 rounded-[35px] p-10 hover:border-yellow-500 transition duration-300">
            <div className="flex justify-center mb-6">
              <MessageCircle className="text-yellow-500 w-10 h-10" />
            </div>

            <h3 className="text-3xl font-serif text-yellow-500 mb-6">
              WhatsApp
            </h3>

            <p className="text-gray-300 text-2xl mb-6">
              Available 24/7
            </p>

            <a
              href="https://wa.me/917718036089"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Chat Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;