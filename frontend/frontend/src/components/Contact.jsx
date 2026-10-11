import useReveal from '../hooks/useReveal.js';
import { site } from '../data/site.js';

function Contact() {
  const ref = useReveal();

  return (
    <section className="section reveal" id="contact" ref={ref} aria-labelledby="contact-label">
      <div className="container section__grid">
        <h2 className="section__label" id="contact-label">
          Contact
        </h2>
        <div>
          <p className="section__statement">Say hello.</p>
          <a className="link link--inline section__email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
