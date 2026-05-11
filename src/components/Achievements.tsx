import { motion } from 'motion/react';
import { Award, Medal, Trophy } from 'lucide-react';

export default function Achievements() {
  const points = [
    { title: "Juara kompetisi renang pelajar", icon: Trophy, desc: "Meraih podium pertama di berbagai turnamen bergengsi tingkat pelajar." },
    { title: "Mengoleksi berbagai medali renang", icon: Medal, desc: "Telah mengumpulkan lebih dari 15 medali emas, perak, dan perunggu dari berbagai ajang." },
    { title: "Aktif mengikuti turnamen", icon: Award, desc: "Berpartisipasi secara aktif dalam kejuaraan daerah maupun nasional." },
    { title: "Konsisten berlatih & berkembang", icon: Trophy, desc: "Disiplin tinggi dengan jadwal latihan ketat untuk memecahkan rekor personal." },
  ];

  const Icon0 = points[0].icon;
  const Icon1 = points[1].icon;
  const Icon2 = points[2].icon;
  const Icon3 = points[3].icon;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-deep">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-cyan uppercase mb-4">Ajang Prestasi</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase">My Achievements<span className="text-cyan">.</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[280px]">
          
          {/* Image 1: Podium (Spans 2 rows on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group border border-white/10 box-glow bg-[#0a0f1c] min-h-[300px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay z-10 group-hover:bg-cyan/10 transition-colors duration-500" />
            <img 
              src="https://storage.googleapis.com/aistudio-chat-app-dev-user-uploads/650472109580/c9c3e9a7-96a5-4927-a06f-cc296e85e5af.jpg" 
              alt="Champion Podium" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Point 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-center group hover:bg-white/[0.05] hover:border-cyan/30 transition-all duration-300 relative overflow-hidden min-h-[250px] md:min-h-0"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon0 className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center text-cyan mb-6 group-hover:bg-cyan group-hover:text-deep transition-colors box-glow">
                <Icon0 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">{points[0].title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{points[0].desc}</p>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-center group hover:bg-white/[0.05] hover:border-cyan/30 transition-all duration-300 relative overflow-hidden min-h-[250px] md:min-h-0"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon1 className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center text-cyan mb-6 group-hover:bg-cyan group-hover:text-deep transition-colors box-glow">
                <Icon1 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">{points[1].title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{points[1].desc}</p>
            </div>
          </motion.div>

          {/* Image 2: Medals (Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group border border-white/10 box-glow bg-[#0a0f1c] min-h-[280px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay z-10 group-hover:bg-cyan/10 transition-colors duration-500" />
            <img 
              src="https://storage.googleapis.com/aistudio-chat-app-dev-user-uploads/650472109580/28f731c3-add9-4fef-a6f9-0335e2363bca.jpg" 
              alt="Medals Collection" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Point 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-cyan/10 border border-cyan/20 p-8 flex flex-col justify-center group hover:bg-cyan/20 transition-all duration-300 relative overflow-hidden min-h-[250px] md:min-h-0 box-glow"
          >
            <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon2 className="w-32 h-32 text-cyan" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-cyan flex items-center justify-center text-deep mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan/50">
                <Icon2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{points[2].title}</h4>
              <p className="text-sm text-cyan/80 leading-relaxed">{points[2].desc}</p>
            </div>
          </motion.div>

          {/* Point 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-white/[0.02] border border-white/5 p-8 flex items-center group hover:bg-white/[0.05] hover:border-cyan/30 transition-all duration-300 relative overflow-hidden flex-col md:flex-row gap-8 min-h-[250px] md:min-h-0"
          >
            <div className="absolute top-1/2 -translate-y-1/2 right-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Icon3 className="w-48 h-48 text-white" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 shrink-0 rounded-full bg-cyan/10 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-deep transition-colors box-glow">
                <Icon3 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan transition-colors">{points[3].title}</h4>
                <p className="text-base text-gray-400 leading-relaxed max-w-lg">{points[3].desc}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
