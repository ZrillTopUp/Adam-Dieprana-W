import { motion } from 'motion/react';
import { Target, Trophy, Clock, MapPin, User, Activity, Briefcase } from 'lucide-react';

export default function Biodata() {
  const info = [
    { label: "Nama Lengkap", value: "Adam Dieprana Wibowo", icon: User },
    { label: "Panggilan", value: "Adam / Dam", icon: User },
    { label: "Tanggal Lahir", value: "28 Juni 2010", icon: Clock },
    { label: "Umur", value: "15 Tahun", icon: Activity },
    { label: "Asal", value: "Depok, Jawa Barat, Indonesia", icon: MapPin },
    { label: "Status", value: "Pelajar & Atlet Renang", icon: Briefcase },
    { label: "Hobi", value: "Renang, Bisnis Digital, Desain", icon: Target },
    { label: "Cita-cita", value: "Membangun perusahaan besar sendiri", icon: Trophy },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-deep">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sea/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-cyan uppercase mb-4">Profil Atlet</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase">Biodata<span className="text-cyan">_</span></h3>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="glass-box p-8 md:p-12 relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {info.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-2 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-cyan" />
                    <span className="text-sm text-gray-400 uppercase tracking-wider">{item.label}</span>
                  </div>
                  <p className="text-xl font-medium text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
            
            {/* About Me snippet */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 p-8 border-l-4 border-cyan bg-cyan/5 rounded-r-2xl relative"
            >
              <div className="absolute top-4 right-4 text-cyan/20 text-6xl font-serif">"</div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic relative z-10">
                Saya adalah atlet renang muda dengan semangat kompetitif tinggi dan disiplin dalam latihan. Selain fokus pada olahraga, saya juga tertarik pada bisnis digital, teknologi, dan pengembangan diri untuk membangun masa depan yang besar.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
