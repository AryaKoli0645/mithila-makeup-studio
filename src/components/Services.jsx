import { Sparkles, Crown, Camera, Heart, Scissors, Star } from "lucide-react";

const services = [
  {
    icon: <Crown size={32} />,
    title: "Bridal Makeup",
    desc: "Luxury bridal looks crafted to make your special day unforgettable.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "HD Makeup",
    desc: "Flawless HD makeup for shoots, weddings, and premium events.",
  },
  {
    icon: <Heart size={32} />,
    title: "Party Makeup",
    desc: "Elegant party makeup styles tailored to your personality.",
  },
  {
    icon: <Camera size={32} />,
    title: "Engagement Makeup",
    desc: "Soft glam and classy engagement looks with perfect finishing.",
  },
  {
    icon: <Scissors size={32} />,
    title: "Hairstyling",
    desc: "Modern hairstyles and elegant hair finishing for every occasion.",
  },
  {
    icon: <Star size={32} />,
    title: "Saree Draping",
    desc: "Professional saree draping styles with graceful presentation.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      data-aos="fade-up"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Premium Services
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience luxury beauty services designed to enhance your confidence
            and elegance for every special occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="text-yellow-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;