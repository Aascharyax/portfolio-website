import { motion } from 'framer-motion';
import { Binary, Braces, Code2, GitBranch, Lightbulb, PanelsTopLeft, PenTool, Workflow } from 'lucide-react';

const skills = [
  { name: 'C Programming', icon: <Binary size={19} />, detail: 'Logic, syntax, memory-aware thinking' },
  { name: 'Python', icon: <Code2 size={19} />, detail: 'Readable scripts and problem practice' },
  { name: 'HTML', icon: <PanelsTopLeft size={19} />, detail: 'Semantic structure for the web' },
  { name: 'CSS', icon: <PenTool size={19} />, detail: 'Layout, spacing, responsive polish' },
  { name: 'JavaScript', icon: <Braces size={19} />, detail: 'Interaction and browser behavior' },
  { name: 'React', icon: <Workflow size={19} />, detail: 'Component thinking and UI state' },
  { name: 'Git & GitHub', icon: <GitBranch size={19} />, detail: 'Version control and public growth' },
  { name: 'Problem Solving', icon: <Lightbulb size={19} />, detail: 'Breaking complex ideas into steps' },
];

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-28 lg:h-fit"
        >
          <p className="eyebrow">Skills</p>
          <h2 className="premium-heading mt-5">A capability index, not a trophy wall.</h2>
          <p className="muted-copy mt-6">
            These are the tools currently shaping Aascharya&apos;s technical growth:
            practical fundamentals, web craft, source control, and structured thinking.
          </p>
        </motion.div>

        <div className="border-t border-paper/[.12]">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.035 }}
              className="group grid gap-5 border-b border-paper/[.12] py-7 transition hover:bg-paper/[.035] sm:grid-cols-[84px_1fr_auto] sm:items-center sm:px-5"
            >
              <span className="text-sm font-black text-muted">0{index + 1}</span>
              <div>
                <h3 className="text-3xl font-black tracking-[-0.04em] text-paper sm:text-4xl">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{skill.detail}</p>
              </div>
              <div className="grid h-11 w-11 place-items-center border border-paper/[.16] text-brass transition group-hover:bg-brass group-hover:text-ink">
                {skill.icon}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
