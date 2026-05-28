const reviews = [
  {
    name: "Priya Sharma",
    text: "Absolutely amazing bridal look. I felt confident and beautiful on my special day.",
  },
  {
    name: "Sneha Patil",
    text: "Professional work with premium finishing. Highly recommended for bridal makeup.",
  },
  {
    name: "Anjali Verma",
    text: "Loved the makeup and hairstyle. Elegant work and very friendly experience.",
  },
];

const Testimonials = () => {
  return (
    <section data-aos="fade-up" className="bg-[#0B0B0B] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
            Client Reviews
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-3xl p-8"
            >
              <div className="text-[#D4AF37] text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {review.text}
              </p>

              <h3 className="font-semibold text-lg">
                {review.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;