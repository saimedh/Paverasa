import { Link } from 'react-router-dom';
import {
  AtSign, MessageCircle, Code2, Globe,
  Mail, Phone, MapPin, ArrowUpRight
} from 'lucide-react';
import Logo from './Logo';
import './footer.css';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Careers', to: '/contact' },
  ],
  Services: [
    { label: 'Web Development', to: '/services' },
    { label: 'Mobile Development', to: '/services' },
    { label: 'AI Solutions', to: '/services' },
    { label: 'Student Programs', to: '/services' },
  ],
  Resources: [
    { label: 'Blog & Insights', to: '/blog' },
    { label: 'Products', to: '/products' },
    { label: 'FAQs', to: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'Cookie Policy', to: '#' },
  ],
};

const socials = [
  { icon: AtSign, href: '#', label: 'Twitter' },
  { icon: MessageCircle, href: '#', label: 'LinkedIn' },
  { icon: Code2, href: '#', label: 'GitHub' },
  { icon: Globe, href: '#', label: 'Website' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        {/* Top: Brand + Links */}
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Paverasa Home">
              <Logo className="footer__logo-svg" />
            </Link>
            <p className="footer__tagline">
              Building software that empowers businesses and inspires the next generation of innovators.
            </p>
            {/* Socials */}
            <div className="footer__socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="footer__social" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* Contact info */}
            <div className="footer__contact">
              <div className="footer__contact-item">
                <Mail size={14} />
                <span>hello@paverasa.com</span>
              </div>
              <div className="footer__contact-item">
                <Phone size={14} />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="footer__contact-item">
                <MapPin size={14} />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer__col">
              <h4 className="footer__col-title">{group}</h4>
              <ul className="footer__col-links">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Paverasa. All rights reserved.</p>
          <a href="#top" className="footer__back-top">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
