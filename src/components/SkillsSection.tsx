import { motion } from 'framer-motion';

const skills = {
  mipa: [
    { name: 'Informatika', level: 91 },
    { name: 'Matematika', level: 92 },
    { name: 'Fisika', level: 89 },
    { name: 'Biologi', level: 95 },
  ],
  bahasa: [
    { name: 'Bahasa Indonesia', level: 98 },
    { name: 'Bahasa Inggris', level: 96 },
    { name: 'Menulis Arab', level: 88 }, // Sesuai hobi nulis kamu!
  ],
  sosial: [
    { name: 'Ekonomi', level: 94 },
    { name: 'Sosiologi', level: 95 },
    { name: 'Sejarah', level: 92 },
    { name: 'Geografi', level: 89 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-pink-500 font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-pink-50 rounded-full overflow-hidden border border-pink-100">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-pink-300 to-pink-500"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 font-medium mb-2 block">Akademik</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            Kemampuan & Minat Belajar
          </h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* MIPA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-50">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-800">MIPA</h3>
            </div>
            <div className="space-y-4">
              {skills.mipa.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Bahasa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-50">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-800">Bahasa & Sastra</h3>
            </div>
            <div className="space-y-4">
              {skills.bahasa.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Sosial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-50">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-800">IPS</h3>
            </div>
            <div className="space-y-4">
              {skills.sosial.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}