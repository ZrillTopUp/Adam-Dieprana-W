import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      src: "https://storage.googleapis.com/aistudio-chat-app-dev-user-uploads/650472109580/c9c3e9a7-96a5-4927-a06f-cc296e85e5af.jpg",
      title: "Podium Moment",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      title: "Intense Training",
      colSpan: "col-span-1",
      rowSpan: "row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      title: "Sporty Lifestyle",
      colSpan: "col-span-1",
      rowSpan: "row-span-1"
    },
    {
      src: "https://storage.googleapis.com/aistudio-chat-app-dev-user-uploads/650472109580/28f731c3-add9-4fef-a6f9-0335e2363bca.jpg",
      title: "Gold Medals",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-1"
    }
  ];

  return (
    <section className="py-24 relative bg-[#030610]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-cyan uppercase mb-4">Visual Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase">Gallery<span className="text-cyan">_</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-2xl group ${img.colSpan} ${img.rowSpan}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-cyan/20 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay" />
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Neon border hover */}
              <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-cyan/50 box-glow transition-colors duration-500 z-20 rounded-2xl" />
              
              {/* Content on hover */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-2xl font-bold text-white uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h4>
                <div className="w-12 h-1 bg-cyan mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
