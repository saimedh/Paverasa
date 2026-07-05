import { Link } from 'react-router-dom';
import {
  Globe,
  Mail, Phone, MapPin, ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon, YoutubeIcon, WhatsappIcon } from './SocialIcons';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { DotPattern } from './ui/dot-pattern';
import { cn } from '../lib/utils';
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
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/paverasa-pvt-ltd/', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/paverasa__pvt__ltd/', label: 'Instagram' },
  { icon: YoutubeIcon, href: 'https://youtube.com/@paverasa_pvt_ltd?si=83PF_duYpXbWwM3n', label: 'YouTube' },
  { icon: Globe, href: 'https://paverasa.blogspot.com/2026/05/thats-when-paverasa-began.html', label: 'Blog' },
  { icon: WhatsappIcon, href: 'https://whatsapp.com/channel/0029VbCOU4E1yT27hTnUlk1x', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="footer p-0 overflow-hidden">
      <section className="relative w-full flex flex-col items-center justify-center pt-20 pb-8 bg-gradient-to-tr from-muted/30 to-background overflow-hidden">
        <DotPattern className={cn(
          "[mask-image:radial-gradient(40vw_circle_at_center,white,transparent)]",
        )} />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-secondary/15 blur-[120px] rounded-full z-0 pointer-events-none"
        />
        
        <div className="container-wide relative z-10 w-full">
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
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label={label}>
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
                  <span>+91 81254 32177</span>
                </div>
                <div className="footer__contact-item">
                  <MapPin size={14} />
                  <span>Middle town medchal</span>
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
          <div className="footer__bottom mt-16 pt-8 border-t border-muted-foreground/10 flex justify-between items-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Paverasa. All rights reserved.</p>
            <a href="#top" className="footer__back-top flex items-center hover:text-primary transition-colors">
              Back to top <ArrowUpRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
