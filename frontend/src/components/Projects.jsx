import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Code, LayoutDashboard } from 'lucide-react';

const tracks = [
  {
    title: 'Learning Journey',
    status: 'Active',
    icon: <BookOpen size={20} />,
    text: 'Documenting the move from fundamentals to polished interfaces through small, deliberate builds.',
  },
  {
    title: 'Technical Growth',
    status: 'In progress',
    icon: <Code size={20} />,
    text: 'Strengthening C, Python, JavaScript, React, and version control through repeated practice.',
  },
  {
    title: 'Future Projects',
    status: 'Planned',
    icon: <LayoutDashboard size={20} />,
    text: 'A set of web experiments and useful applications will be added as the work becomes ready to show.',
  },
];

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="relative overflow-hidden bg-paper py-12 text-ink lg:py-16">
        <div className="absolute left-0 top-0 hidden h-full w-16 bg-brass lg:block" />
        <div className="px-5 sm:px-8 lg:pl-28 lg:pr-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-black uppercase tracking-[0.32em] text-clay">Work in motion</p>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">
                Not empty. Just early.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="max-w-2xl text-lg font-medium leading-8 text-ink/[.68]"
            >
              Instead of filling space with fake case studies, this section names the
              real work happening now: learning, refining, and preparing future projects
              that deserve to be published.
            </motion.p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/[.16] lg:grid-cols-3">
            {tracks.map((track, index) => (
              <motion.article
                key={track.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.06 }}
                className="group bg-paper p-6 transition hover:bg-[#ece0ce]"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-11 w-11 place-items-center border border-ink/[.18] text-clay transition group-hover:bg-ink group-hover:text-paper">
                    {track.icon}
                  </span>
                  <ArrowUpRight size={19} className="text-ink/[.36] transition group-hover:text-clay" />
                </div>
                <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-ink/[.45]">
                  {track.status}
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">{track.title}</h3>
                <p className="mt-5 text-sm font-medium leading-7 text-ink/[.62]">{track.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
