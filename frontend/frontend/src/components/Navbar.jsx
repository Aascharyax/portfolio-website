import ThemeToggle from './ThemeToggle.jsx';

function Navbar() {
  return (
    <header className="nav">
      <nav className="nav__inner" aria-label="Primary">
        <a className="nav__mark" href="#top" aria-label="Aascharya Paudel, back to top">
          AP
        </a>
        <div className="nav__right">
          <ul className="nav__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
