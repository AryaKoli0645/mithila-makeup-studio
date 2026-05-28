import Gallery from "./components/Gallery";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        
        <p className="text-[#D4AF37] tracking-[4px] uppercase mb-4">
          Luxury Makeup Artist
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Mithila <span className="text-[#D4AF37]">Makeup</span> Studio
        </h1>

        <p className="max-w-2xl text-gray-400 text-lg mb-8">
          Elevating beauty with elegance, luxury and timeless bridal artistry.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Book Now
          </button>

          <button className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition">
            View Portfolio
          </button>
        </div>

      </section>

      {/* SERVICES SECTION */}
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsappButton />
      <Navbar />

    </div>
  )
}

export default App