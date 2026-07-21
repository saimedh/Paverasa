import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, Brain, BarChart3, Cloud, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ParticleCanvas from '../components/ParticleCanvas';
import { services } from '../data/services';
import { RevealImageList } from '../components/ui/reveal-images';
import './services.css';

const iconMap = {
  Globe, Smartphone, Palette, Brain, BarChart3, Cloud, GraduationCap,
};

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero page-hero--light" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container page-hero__content">
          <ScrollReveal>
            <p className="eyebrow">What We Offer</p>
            <h1 className="services-hero-title">Seven ways we<br />help you win</h1>
            <p className="page-hero__sub" style={{ color: 'var(--color-text-muted)' }}>
              From strategic product design to infrastructure at scale — our services are built to deliver results that last.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container py-12">
          <ScrollReveal>
            <RevealImageList />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="closing-cta-mini">
        <div className="container">
          <ScrollReveal>
            <h2>Not sure which service fits?</h2>
            <p>Schedule a free discovery call — we'll figure it out together.</p>
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
