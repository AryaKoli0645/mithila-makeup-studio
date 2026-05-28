const galleryImages = [
  "/images/img1.jpeg",
  
  "/images/img2.jpeg",

  "/images/img3.jpeg",

  "/images/img4.jpeg",

  "/images/img5.jpeg",

  "/images/img6.jpeg",
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      data-aos="zoom-in"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beauty Transformations
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our signature bridal and luxury makeup looks crafted
            with elegance, precision, and timeless beauty.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl group"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-100 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;