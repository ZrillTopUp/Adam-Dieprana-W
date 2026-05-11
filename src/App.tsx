import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Biodata from './components/Biodata';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.classList.add('loading');
    
    // Simulate loading time for cinematic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <div className="bg-deep min-h-screen text-white font-sans overflow-hidden">
      <LoadingScreen isLoading={isLoading} />
      
      {/* Show regular cursor briefly on mobile, but since it's a fixed div it won't hurt, just hidden on touch natively */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <main>
        <Hero />
        <Biodata />
        <Achievements />
        <Gallery />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}
