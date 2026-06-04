import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Braces, Code2, Layers2 } from 'lucide-react';

function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22 });
  const markX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const markY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="section-shell relative min-h-screen pt-32 lg:pt-36"
    >
      <div className="grid min-h-[calc(100vh-9rem)] items-end gap-12 lg:grid-cols-[1.12fr_.88fr]">
        <div className="pb-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="eyebrow">Aascharya Paudel</span>
            <span className="h-px w-16 bg-paper/[.22]" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/[.48]">
              Student / Future Engineer / Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-5xl text-[clamp(4.35rem,12.4vw,11.6rem)] font-black uppercase leading-[0.8] tracking-[-0.055em] text-paper"
          >
            Building
            <span className="block text-paper/[.32]">Ideas</span>
            <span className="block">
              Into <span className="tracking-[-0.04em]">Reality</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className="mt-8 grid max-w-4xl gap-6 border-l border-brass pl-5 md:grid-cols-[1fr_auto]"
          >
            <p className="max-w-2xl text-lg leading-8 text-paper/[.7]">
              I&apos;m Aascharya Paudel, a student passionate about technology,
              programming, and building the future one step at a time.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="#journey"
                className="group inline-flex items-center justify-center gap-2 bg-paper px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-ink transition hover:bg-brass"
              >
                Explore
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-paper/[.2] px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-paper transition hover:border-brass hover:text-brass"
              >
                Contact
                <ArrowDownRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.aside
          style={{ x: markX, y: markY }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.22, duration: 0.7 }}
          className="relative mb-8 min-h-[520px] border border-paper/[.14] bg-graphite p-5 sm:p-7"
        >
          <div className="absolute -left-6 top-12 hidden h-28 w-12 bg-brass lg:block" />
          <div className="absolute -right-4 bottom-16 hidden h-40 w-8 border border-clay lg:block" />

          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-muted">Current focus</p>
              <h2 className="serif-mark mt-3 text-4xl leading-none text-paper sm:text-5xl">
                Learn deeply. Build quietly.
              </h2>
            </div>
            <span className="text-6xl font-black leading-none text-brass">01</span>
          </div>

          <div className="mt-12 grid gap-3">
            <FocusRow icon={<Code2 size={18} />} title="Programming fundamentals" meta="C / Python / JavaScript" />
            <FocusRow icon={<Layers2 size={18} />} title="Interface craft" meta="HTML / CSS / React" />
            <FocusRow icon={<Braces size={18} />} title="Problem solving" meta="Practice / logic / consistency" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 overflow-hidden border-t border-paper/[.12] pt-5">
            <div className="flex w-max animate-ticker gap-8 text-xs font-black uppercase tracking-[0.28em] text-paper/[.38]">
              <span>Technical growth</span>
              <span>Intentional practice</span>
              <span>Future projects</span>
              <span>Creative discipline</span>
              <span>Technical growth</span>
              <span>Intentional practice</span>
              <span>Future projects</span>
              <span>Creative discipline</span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function FocusRow({ icon, title, meta }) {
  return (
    <div className="group grid grid-cols-[44px_1fr] gap-4 border-t border-paper/[.1] py-5 transition hover:border-brass">
      <div className="grid h-11 w-11 place-items-center border border-paper/[.16] text-brass transition group-hover:bg-brass group-hover:text-ink">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-black text-paper">{title}</h3>
        <p className="mt-1 text-sm text-muted">{meta}</p>
      </div>
    </div>
  );
}

export default Hero;
