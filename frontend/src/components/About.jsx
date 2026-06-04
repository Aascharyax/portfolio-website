import { motion } from 'framer-motion';

const principles = [
  {
    label: 'Curiosity',
    text: 'Questions come first. Every new concept becomes a doorway into a better mental model.',
  },
  {
    label: 'Practice',
    text: 'Small, consistent builds matter more than pretending the portfolio is already complete.',
  },
  {
    label: 'Taste',
    text: 'Learning code also means learning restraint, structure, spacing, and how people experience software.',
  },
  {
    label: 'Direction',
    text: 'The long-term aim is engineering: strong fundamentals, useful products, and meaningful growth.',
  },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="border-y border-paper/[.12] py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="eyebrow">About</p>
            <h2 className="premium-heading mt-5">
              Not a finished story. A disciplined beginning.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.08 }}
          >
            <p className="max-w-3xl text-2xl font-semibold leading-snug text-paper md:text-4xl">
              Aascharya is building the habits that make technical work last:
              careful learning, clear thinking, and the patience to turn beginner
              energy into real capability.
            </p>
            <p className="muted-copy mt-7 max-w-2xl">
              This site intentionally treats the learning phase as part of the work.
              The portfolio will grow with projects, but the identity is already here:
              focused, curious, and serious about craft.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid border-t border-paper/[.12] md:grid-cols-4">
          {principles.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06 }}
              className="border-b border-paper/[.12] py-7 pr-6 md:border-b-0 md:border-r md:border-paper/[.12] md:p-7 md:first:pl-0 md:last:border-r-0"
            >
              <span className="text-xs font-black uppercase tracking-[0.26em] text-brass">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-2xl font-black text-paper">{item.label}</h3>
              <p className="mt-4 text-sm leading-7 text-paper/[.62]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
