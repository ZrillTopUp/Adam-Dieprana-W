import { motion } from 'motion/react';
import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#02040a] pt-24 pb-8 overflow-hidden">
      {/* Animated waves at the bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-48 bg-cyan/5 blur-[80px] rounded-t-[100%]"
        animate={{ scaleY: [1, 1.2, 1], scaleX: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan to-transparent box-glow-strong" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-8"
          >
            Connect With Adam
          </motion.h2>

          <div className="flex gap-6 mb-16">
            <motion.a 
              href="https://instagram.com/daamnn_28" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-16 h-16 rounded-full glass hover:border-cyan hover:text-cyan transition-colors box-glow"
            >
              <Instagram className="w-8 h-8" />
            </motion.a>
            <motion.a 
              href="https://wa.me/6285210825422" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-16 h-16 rounded-full glass hover:border-cyan hover:text-cyan transition-colors box-glow"
            >
              <Phone className="w-8 h-8" />
            </motion.a>
          </div>

          <div className="w-full h-px bg-white/10 mb-8" />

          <p className="text-gray-500 text-sm tracking-wider uppercase">
            Built with passion by <span className="text-cyan font-semibold block sm:inline mt-2 sm:mt-0">Adam Dieprana Wibowo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
