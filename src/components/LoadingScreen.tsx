import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-deep flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan to-white text-glow uppercase">
              Adam Dieprana Wibowo
            </h1>
            <p className="mt-4 text-cyan tracking-[0.3em] text-sm md:text-base opacity-70">
              PREMIUM ATHLETE PORTFOLIO
            </p>
          </motion.div>
          {/* Water ripple backgrounds */}
          <motion.div 
            className="absolute inset-0 border-[1px] border-cyan/20 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 border-[1px] border-cyan/10 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
