import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/meet.png"
            alt="Makeup Artist"
            className="rounded-3xl shadow-2xl w-full h-125 object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-400 uppercase tracking-[4px] mb-3 text-sm">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Welcome to <br />
            <span className="text-pink-400">
              Mithila Makeup Studio
            </span>
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            We create elegant, luxurious, and flawless makeup looks for every
            special occasion. From bridal transformations to glamorous party
            makeup, our goal is to make every client feel confident and
            beautiful.
          </p>

          <p className="text-gray-400 leading-7 mb-8">
            At Mithila Makeup Studio, beauty meets creativity. We use premium
            products, modern techniques, and personalized styling to deliver a
            perfect experience for every client.
          </p>

          <button className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 px-8 py-3 rounded-full text-white font-semibold shadow-lg">
            Book Appointment
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;