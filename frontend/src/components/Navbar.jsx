import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, SquareAsterisk, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mx-auto flex max-w-7xl items-center justify-between border px-4 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-paper/[.14] bg-ink/[.88] backdrop-blur-xl'
            : 'border-paper/[.1] bg-ink/[.56] backdrop-blur-md'
        }`}
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-brass text-brass transition group-hover:bg-brass group-hover:text-ink">
            <SquareAsterisk size={18} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-paper">Aascharya</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Paudel
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-semibold text-paper/[.62] transition hover:bg-paper/[.08] hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-brass px-5 py-2 text-sm font-black uppercase tracking-[0.12em] text-brass transition hover:bg-brass hover:text-ink md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border border-paper/[.14] bg-paper/[.06] text-paper md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-3 max-w-7xl border border-paper/[.12] bg-ink/[.94] p-3 shadow-editorial backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-paper/[.74] hover:bg-paper/[.08] hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
