import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Brain,
  GraduationCap,
  BarChart2,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { ExpandingCards } from '../components/ExpandingCards';
import { FeatureSteps } from '../components/FeatureSteps';
import { products } from '../data/products';
import './products.css';

/* ── Expanding-card data mapped from Paverasa's actual products ── */
const expandingItems = [
  {
    id: 'paverasa-suite',
    title: 'Paverasa Suite',
    description:
      'All-in-one ERP-style platform combining project management, HR, finance, and client management in one seamless interface.',
    imgSrc:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    icon: <BarChart3 size={24} />,
    linkHref: '/contact',
  },
  {
    id: 'intelliflow',
    title: 'IntelliFlow',
    description:
      'AI-powered workflow automation that learns from your patterns and continuously optimises your business operations.',
    imgSrc:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
    icon: <Brain size={24} />,
    linkHref: '/contact',
  },
  {
    id: 'campuslink',
    title: 'CampusLink',
    description:
      'Connecting student innovators, mentors, and investors. Post projects, find co-founders, and showcase your work.',
    imgSrc:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    icon: <GraduationCap size={24} />,
    linkHref: '/contact',
  },
  {
    id: 'dataviz-pro',
    title: 'DataViz Pro',
    description:
      'Build beautiful, interactive data dashboards without a line of code. Connect any source and share insights instantly.',
    imgSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    icon: <BarChart2 size={24} />,
    linkHref: '/contact',
  },
  {
    id: 'cloudshield',
    title: 'CloudShield',
    description:
      'Automated cloud security scanning, compliance monitoring, and threat detection for cloud-native apps.',
    imgSrc:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    icon: <ShieldCheck size={24} />,
    linkHref: '/contact',
  },
  {
    id: 'mobilekit',
    title: 'MobileKit',
    description:
      'Premium React Native component library. Ship production-ready mobile apps 3× faster with battle-tested UI primitives.',
    imgSrc:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    icon: <Smartphone size={24} />,
    linkHref: '/contact',
  },
];

export default function Products() {
  const live   = products.filter(p => p.status === 'live');
  const coming = products.filter(p => p.status === 'coming');

  const liveFeatures = live.map(product => ({
    step: product.tagline,
    title: product.name,
    content: product.description,
    image: product.image
  }));

  const comingFeatures = coming.map(product => ({
    step: product.tagline,
    title: product.name,
    content: product.description,
    image: product.image
  }));

  return (
    <div className="products-page">

      {/* ── Hero ── */}
      <section className="page-hero page-hero--light" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container page-hero__content">
          <ScrollReveal>
            <p className="eyebrow" style={{ color: 'var(--color-primary)' }}>Our Products</p>
            <h1 className="products-hero-title">
              Software built<br />by builders, for builders
            </h1>
            <p className="page-hero__sub" style={{ color: 'var(--color-text-muted)' }}>
              From ERP platforms to AI workflow tools — Paverasa products are crafted
              to solve real problems with real elegance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Expanding Cards Showcase ── */}
      <section className="section products-expanding-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">Explore the Suite</p>
              <h2>Every product, one hover away</h2>
              <p>Hover or tap a card to dive into each product. Click <strong>Learn More</strong> to get in touch.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="products-expanding-wrap">
              <ExpandingCards items={expandingItems} defaultActiveIndex={0} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Live Products ── */}
      <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">

          <ScrollReveal>
            <div className="products-section-header">
              <div className="products-section-header__left">
                <span className="badge badge-live">● Live</span>
                <h2 className="products-section-label">Available Now</h2>
              </div>
              <p className="products-section-sub">
                Production-ready products you can start using today.
              </p>
            </div>
          </ScrollReveal>

          <FeatureSteps features={liveFeatures} autoPlayInterval={4000} />

          {/* ── Coming Soon ── */}
          <ScrollReveal>
            <div className="products-section-header" style={{ marginTop: 'var(--space-20)' }}>
              <div className="products-section-header__left">
                <span className="badge badge-coming">◌ Coming Soon</span>
                <h2 className="products-section-label">In Development</h2>
              </div>
              <p className="products-section-sub">
                These products are actively being built. Join the waitlist for early access.
              </p>
            </div>
          </ScrollReveal>

          <FeatureSteps features={comingFeatures} autoPlayInterval={4000} />

        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="closing-cta-mini">
        <div className="container">
          <ScrollReveal>
            <h2>Building something similar?</h2>
            <p>Let's talk about how we can help you ship faster.</p>
            <div className="closing-cta-mini__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
