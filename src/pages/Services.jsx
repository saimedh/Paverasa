import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, Brain, BarChart3, Cloud, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ParticleCanvas from '../components/ParticleCanvas';
import { services } from '../data/services';
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
        <div className="container">
          <div className="services-list">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Globe;
              return (
                <ScrollReveal key={svc.id} delay={i * 60}>
                  <div className="svc-item">
                    <div className="svc-item__icon-col">
                      <div className="svc-item__icon" style={{ background: `${svc.color}18`, color: svc.color }}>
                        <Icon size={28} />
                      </div>
                      <span className="svc-item__num">0{i + 1}</span>
                    </div>
                    <div className="svc-item__body">
                      <h2 className="svc-item__title">{svc.title}</h2>
                      <p className="svc-item__desc">{svc.fullDesc}</p>
                      <ul className="svc-item__features">
                        {svc.features.map(f => (
                          <li key={f} className="svc-item__feature">
                            <CheckCircle2 size={15} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="svc-item__cta">
                      <Link to="/contact" className="btn btn-primary">
                        Get Started <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
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
