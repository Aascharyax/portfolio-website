import { motion } from 'framer-motion';

const milestones = [
  {
    title: 'Started Learning Programming',
    text: 'Understanding how instructions, logic, and persistence turn ideas into working behavior.',
  },
  {
    title: 'Learning Web Development',
    text: 'Moving from static structure to responsive interfaces with HTML, CSS, JavaScript, and React.',
  },
  {
    title: 'Exploring Artificial Intelligence',
    text: 'Studying the direction of modern tools while keeping fundamentals at the center.',
  },
  {
    title: 'Building Real-World Applications',
    text: 'Preparing to turn practice into useful, public-facing software with clearer purpose.',
  },
  {
    title: 'Future Engineering Goals',
    text: 'Growing toward disciplined engineering, thoughtful products, and durable technical judgment.',
  },
];

function Journey() {
  return (
    <section id="journey" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Journey</p>
          <h2 className="premium-heading mt-5">The roadmap is simple. The work is not.</h2>
        </motion.div>

        <div className="relative border-l border-paper/[.16] pl-6 sm:pl-10">
          {milestones.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.05 }}
              className="relative border-b border-paper/[.12] py-8 first:pt-0"
            >
              <span className="absolute -left-[31px] top-9 h-3 w-3 bg-brass sm:-left-[47px]" />
              <div className="grid gap-5 sm:grid-cols-[88px_1fr]">
                <span className="text-sm font-black text-brass">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-paper/[.62]">{item.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
