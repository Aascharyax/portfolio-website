import { site } from '../data/site.js';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {site.firstName} {site.lastName}
        </p>
        <p>Designed and built by hand.</p>
      </div>
    </footer>
  );
}

export default Footer;
