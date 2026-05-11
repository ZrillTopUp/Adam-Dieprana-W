import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function Skills() {
  const skills = [
    { name: "Swimming", percent: 95 },
    { name: "Discipline", percent: 92 },
    { name: "Competitive Mentality", percent: 90 },
    { name: "Digital Business", percent: 88 },
    { name: "Leadership", percent: 85 },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative bg-deep overflow-hidden">
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-cyan/10 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-cyan uppercase mb-4">Core Strengths</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase">Skills Matrix<span className="text-cyan">.</span></h3>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-box p-8 md:p-14">
          <div className="flex flex-col gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-white uppercase tracking-wider">{skill.name}</span>
                  <span className="text-cyan font-bold">{skill.percent}%</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden relative">
                  {/* Background Track Glow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
                  
                  {/* Animated Progress */}
                  <motion.div 
                    className="h-full bg-gradient-to-r from-sea to-cyan rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${skill.percent}%` : 0 }}
                    transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                  >
                    {/* Inner glowing edge */}
                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
