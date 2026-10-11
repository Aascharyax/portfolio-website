import useReveal from '../hooks/useReveal.js';
import { site } from '../data/site.js';

function About() {
  const ref = useReveal();

  return (
    <section className="section reveal" id="about" ref={ref} aria-labelledby="about-label">
      <div className="container section__grid">
        <h2 className="section__label" id="about-label">
          About
        </h2>
        <p className="section__statement">{site.about}</p>
      </div>
    </section>
  );
}

export default About;
