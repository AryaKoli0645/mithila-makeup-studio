const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Mithila <span className="text-[#D4AF37]">Makeup</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-[#D4AF37] transition">
            About
          </a>

          <a href="#services" className="hover:text-[#D4AF37] transition">
            Services
          </a>

          <a href="#gallery" className="hover:text-[#D4AF37] transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-[#D4AF37] transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;