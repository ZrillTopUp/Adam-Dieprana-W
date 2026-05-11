import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background cinematic dark overlay */}
      <div className="absolute inset-0 z-0 bg-deep" />
      
      {/* Abstract Water Waves (Animated) */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-64 bg-cyan/10 blur-[100px] z-0 rounded-full"
        animate={{
          scaleY: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-sea/20 blur-[120px] z-0 rounded-full"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-cyan box-glow" />
            <span className="text-cyan tracking-widest text-sm uppercase">Swim to Win</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-[-0.02em]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">ADAM DIEPRANA</span>
            <span className="block text-cyan text-glow">WIBOWO</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed">
            Young Swimming Athlete • Competitive Mentality • Future Entrepreneur
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan text-deep font-semibold rounded-none uppercase tracking-wide box-glow-strong border border-cyan hover:bg-transparent hover:text-cyan transition-colors"
            >
              Explore Profile
            </motion.a>
            <motion.a 
              href="#achievements"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-none uppercase tracking-wide border border-white/30 hover:border-cyan hover:text-cyan transition-colors glass"
            >
              My Achievements
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="relative w-full max-w-md lg:max-w-xl">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-cyan/20 blur-[60px] rounded-full mix-blend-screen" />
            <img 
              src="https://storage.googleapis.com/aistudio-chat-app-dev-user-uploads/650472109580/c9c3e9a7-96a5-4927-a06f-cc296e85e5af.jpg" 
              alt="Adam Dieprana Wibowo"
              className="relative z-10 w-full h-[600px] object-cover rounded-3xl border border-white/10 box-glow"
              style={{ objectPosition: 'center 20%' }}
            />
            {/* Decorative elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 z-20 glass-box p-6 hover:border-cyan/50 transition-colors"
            >
              <div className="text-cyan font-bold text-3xl">15+</div>
              <div className="text-xs text-gray-300 uppercase tracking-widest mt-1">Gold Medals</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-cyan" />
      </motion.div>
    </section>
  );
}
