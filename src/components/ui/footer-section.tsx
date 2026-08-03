'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, YoutubeIcon, WhatsappIcon } from '../SocialIcons';
import { Globe } from 'lucide-react';

/* ─────────────── Data ─────────────── */

const footerSections = [
  {
    label: 'Services',
    links: [
      { title: 'Web Development', to: '/services' },
      { title: 'Mobile Development', to: '/services' },
      { title: 'AI Solutions', to: '/services' },
      { title: 'Student Programs', to: '/services' },
      { title: 'Custom Software', to: '/services' },
    ],
  },
  {
    label: 'Who We Help',
    links: [
      { title: 'Startups', to: '/services' },
      { title: 'Small Businesses', to: '/services' },
      { title: 'Enterprises', to: '/services' },
      { title: 'Students & Learners', to: '/services' },
      { title: 'NGOs & Institutions', to: '/services' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About Us', to: '/about' },
      { title: 'Our Team', to: '/team' },
      { title: 'Careers', to: '/contact' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog & Insights', to: '/blog' },
      { title: 'Products', to: '/products' },
      { title: 'FAQs', to: '/contact' },
    ],
  },
];

const legalLinks = [
  { title: 'Privacy Policy', to: '#' },
  { title: 'Terms of Service', to: '#' },
  { title: 'Cookie Settings', to: '#' },
];

const footnotes = [
  '1 — Results may vary by project complexity and requirements. Based on sampled project timelines over the past 12 months.',
  '2 — Based on client feedback reports across a representative sample. Results may vary by project scope.',
  '3 — Based on sampled onboarding data of clients consolidating development work with Paverasa.',
];

const socials = [
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/paverasa-pvt-ltd/', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/paverasa__pvt__ltd/', label: 'Instagram' },
  { icon: YoutubeIcon, href: 'https://youtube.com/@paverasa_pvt_ltd?si=83PF_duYpXbWwM3n', label: 'YouTube' },
  { icon: Globe, href: 'https://paverasa.blogspot.com/2026/05/thats-when-paverasa-began.html', label: 'Blog' },
  { icon: WhatsappIcon, href: 'https://whatsapp.com/channel/0029VbCOU4E1yT27hTnUlk1x', label: 'WhatsApp' },
];

/* ─────────────── Component ─────────────── */

export function Footer() {
  return (
    <footer className="pv-footer">
      {/* ── Brand row ── */}
      <div className="pv-footer__inner">
        <AnimatedContainer className="pv-footer__brand-row" delay={0}>
          <Link to="/" className="pv-footer__brand-name" aria-label="Paverasa Home">
            Paverasa
          </Link>
          {/* Socials inline with brand on desktop */}
          <div className="pv-footer__socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="pv-footer__social"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </AnimatedContainer>

        {/* ── Divider ── */}
        <div className="pv-footer__divider" />

        {/* ── Link grid ── */}
        <div className="pv-footer__link-grid">
          {footerSections.map((section, i) => (
            <AnimatedContainer key={section.label} delay={0.1 + i * 0.08}>
              <h4 className="pv-footer__col-heading">{section.label}</h4>
              <ul className="pv-footer__col-list">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link to={link.to} className="pv-footer__col-link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>

        {/* ── Footnotes ── */}
        <AnimatedContainer className="pv-footer__footnotes" delay={0.5}>
          {footnotes.map((note, i) => (
            <p key={i} className="pv-footer__footnote-item">{note}</p>
          ))}
        </AnimatedContainer>

        {/* ── Bottom bar ── */}
        <AnimatedContainer className="pv-footer__bottom" delay={0.6}>
          <p className="pv-footer__copyright">
            © {new Date().getFullYear()} Paverasa. All rights reserved.
          </p>
          <div className="pv-footer__legal">
            {legalLinks.map((link, i) => (
              <React.Fragment key={link.title}>
                <Link to={link.to} className="pv-footer__legal-link">
                  {link.title}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span className="pv-footer__legal-sep" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </AnimatedContainer>
      </div>

      {/* ── Styles ── */}
      <style>{`
        /* ── Container ── */
        .pv-footer {
          background-color: #f2f4e8;
          color: #0d2f2e;
          padding: 0;
          font-family: 'Google Sans', 'DM Sans', system-ui, sans-serif;
          border-top: 1px solid rgba(13, 47, 46, 0.1);
        }

        .pv-footer__inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3.5rem 2rem 2rem;
        }

        /* ── Brand row ── */
        .pv-footer__brand-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .pv-footer__brand-name {
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #0d2f2e;
          line-height: 1;
          text-decoration: none;
          font-family: 'Google Sans Display', 'Google Sans', 'Plus Jakarta Sans', system-ui, sans-serif;
          transition: color 0.2s ease;
        }

        .pv-footer__brand-name:hover {
          color: #F97316;
        }

        /* ── Socials ── */
        .pv-footer__socials {
          display: flex;
          gap: 0.625rem;
          flex-shrink: 0;
          padding-bottom: 0.5rem;
        }

        .pv-footer__social {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(13, 47, 46, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(13, 47, 46, 0.6);
          background: transparent;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .pv-footer__social:hover {
          background: #F97316;
          border-color: #F97316;
          color: #fff;
          transform: translateY(-2px);
        }

        /* ── Divider ── */
        .pv-footer__divider {
          height: 1px;
          background: rgba(13, 47, 46, 0.15);
          margin-bottom: 2.5rem;
        }

        /* ── Link grid ── */
        .pv-footer__link-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .pv-footer__col-heading {
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #0d2f2e;
          margin-bottom: 1rem;
          font-family: 'Google Sans', system-ui, sans-serif;
        }

        .pv-footer__col-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pv-footer__col-link {
          font-size: 0.875rem;
          color: rgba(13, 47, 46, 0.65);
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.2s ease;
          display: inline-block;
          position: relative;
        }

        .pv-footer__col-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #F97316;
          transition: width 0.25s ease;
        }

        .pv-footer__col-link:hover {
          color: #0d2f2e;
        }

        .pv-footer__col-link:hover::after {
          width: 100%;
        }

        /* ── Footnotes ── */
        .pv-footer__footnotes {
          border-top: 1px solid rgba(13, 47, 46, 0.1);
          padding-top: 1.5rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .pv-footer__footnote-item {
          font-size: 0.72rem;
          color: rgba(13, 47, 46, 0.45);
          line-height: 1.6;
        }

        /* ── Bottom bar ── */
        .pv-footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(13, 47, 46, 0.1);
        }

        .pv-footer__copyright {
          font-size: 0.8125rem;
          color: rgba(13, 47, 46, 0.5);
        }

        .pv-footer__legal {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .pv-footer__legal-link {
          font-size: 0.8125rem;
          color: rgba(13, 47, 46, 0.5);
          text-decoration: none;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .pv-footer__legal-link:hover {
          color: #0d2f2e;
        }

        .pv-footer__legal-sep {
          display: inline-block;
          width: 1px;
          height: 12px;
          background: rgba(13, 47, 46, 0.2);
          vertical-align: middle;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .pv-footer__link-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .pv-footer__inner {
            padding: 2.5rem 1.25rem 1.5rem;
          }

          .pv-footer__brand-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .pv-footer__link-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }

          .pv-footer__bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .pv-footer__legal {
            flex-wrap: wrap;
            gap: 0.75rem;
          }
        }

        @media (max-width: 380px) {
          .pv-footer__link-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

/* ─────────────── Animation wrapper ─────────────── */

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 12, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.65, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
