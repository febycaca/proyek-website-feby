import { motion } from "framer-motion";

const CertificatesSection = () => {
  const certificates = [
    { id: 1, title: "Sertifikat 1", img: "/sertif1.jpeg" },
    { id: 2, title: "Sertifikat 2", img: "/sertif2.jpeg" },
    { id: 3, title: "Sertifikat 3", img: "/sertif3.jpeg" },
    { id: 4, title: "Sertifikat 4", img: "/sertif4.jpeg" },
    { id: 5, title: "Sertifikat 5", img: "/sertif5.jpeg" },
    { id: 6, title: "Sertifikat 6", img: "/sertif6.jpeg" },
  ];

  return (
    <section className="py-20 bg-[#fff5f8] dark:bg-[#2D283E]/50 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-[#d87093] dark:text-pink-300 font-space"
          >
            My Achievements 🌸
          </motion.h2>
          <div className="h-1.5 w-24 bg-[#ffb7c5] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -15 }}
              className="bg-white/80 dark:bg-[#3d3552] backdrop-blur-md border-2 border-pink-100 dark:border-pink-900/30 rounded-[2.5rem] overflow-hidden shadow-xl shadow-pink-100/30 p-4"
            >
              <div className="rounded-[2rem] overflow-hidden mb-5 aspect-video relative">
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center pb-2">
                <h3 className="text-lg font-bold text-gray-800 dark:text-pink-100 italic">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;