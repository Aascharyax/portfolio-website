import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative z-10 border-t border-paper/[.12]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="text-sm font-bold text-paper">Aascharya Paudel</p>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted">
            Student / Future Engineer / Developer
          </p>
        </div>
        <div className="flex items-center gap-3 text-paper/[.58]">
          <a aria-label="GitHub" href="https://github.com/Aascharyax" className="grid h-10 w-10 place-items-center border border-paper/[.12] bg-paper/[.04] transition hover:border-brass hover:text-brass">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aascharya-paudel/" className="grid h-10 w-10 place-items-center border border-paper/[.12] bg-paper/[.04] transition hover:border-brass hover:text-brass">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="aascharyapaudel95@gmail.com" className="grid h-10 w-10 place-items-center border border-paper/[.12] bg-paper/[.04] transition hover:border-brass hover:text-brass">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-sm text-paper/[.44]">
          Built with ambition and restraint.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
