import Skills from './Skills.jsx';
import { site } from '../data/site.js';

function ArrowUpRight() {
  return (
    <svg className="link__arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path d="M2.5 8.5l6-6M3.5 2.5h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__body">
        <h1 className="hero__title" id="hero-title">
          <span className="rise" style={{ '--d': '0.05s' }}>{site.firstName}</span>{' '}
          <span className="hero__surname rise" style={{ '--d': '0.15s' }}>{site.lastName}</span>
        </h1>

        <p className="hero__tagline rise" style={{ '--d': '0.3s' }}>
          {site.tagline}
        </p>

        <Skills />

        <ul className="hero__links rise" style={{ '--d': '0.55s' }} aria-label="Links">
          <li>
            <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight />
            </a>
          </li>
          <li>
            <a className="link" href={`mailto:${site.email}`}>
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
