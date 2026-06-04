import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-paper antialiased">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-brass"
        style={{ scaleX }}
      />
      <div className="pointer-events-none fixed inset-0 bg-noise-texture bg-[length:22px_22px] opacity-[0.025]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,rgba(243,234,220,.055)_1px,transparent_1px),linear-gradient(180deg,rgba(243,234,220,.04)_1px,transparent_1px)] bg-[length:clamp(56px,8vw,118px)_clamp(56px,8vw,118px)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(214,170,91,.12),transparent)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
