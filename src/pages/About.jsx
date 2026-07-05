import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Lightbulb, Users, Users2, ShieldCheck, CheckCircle2, Rocket } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ParticleCanvas from '../components/ParticleCanvas';
import { team } from '../data/team';
import { services } from '../data/services';
import './about.css';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We push boundaries and champion new ideas — especially from unexpected places.' },
  { icon: Users, title: 'Community', desc: 'We believe technology should lift communities, not just companies.' },
  { icon: Heart, title: 'Empathy', desc: 'We design and build with the end user\'s humanity at the center of every decision.' },
  { icon: CheckCircle2, title: 'Integrity', desc: 'We do what we say, say what we mean, and deliver what we promise.' },
];

const timeline = [
  { year: '2022', title: 'Paverasa Founded', desc: 'Three engineers with a shared belief: software should be accessible and human. Paverasa is born in Middle town medchal.' },
  { year: '2022', title: 'First Product Ships', desc: 'Paverasa Suite v1 launches for local SME clients — replacing spreadsheets with a living, breathing business platform.' },
  { year: '2023', title: 'First Enterprise Client', desc: 'We land our first enterprise contract, validating the market for accessible, affordable enterprise software.' },
  { year: '2023', title: 'CampusLink Launches', desc: 'Our student innovation platform launches at three universities, connecting 500+ students in its first semester.' },
  { year: '2024', title: 'Team Reaches 25', desc: 'We grow from a three-person founding team to 25 engineers, designers, and innovators across five disciplines.' },
  { year: '2025', title: 'IntelliFlow AI Launch', desc: 'Our flagship AI workflow product enters the market, automating thousands of hours of repetitive work for clients.' },
  { year: '2026', title: 'Pan-African Expansion', desc: 'Paverasa opens regional presence in Lagos and Nairobi, serving clients across sub-Saharan Africa and beyond.' },
];

const future = [
  { icon: Rocket, title: 'CloudShield & DataViz Pro', desc: 'Two major products in active development — enterprise cloud security and a no-code analytics builder.' },
  { icon: Users, title: 'Student Program Expansion', desc: 'We\'re scaling CampusLink to 50 universities and launching a €1M innovation grant fund for student-led startups.' },
  { icon: Target, title: 'Global Markets', desc: 'Paverasa is building towards a presence in North America and Europe by 2027, serving tech-forward SMEs globally.' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero page-hero--indigo">
        <ParticleCanvas />
        <div className="container page-hero__content">
          <ScrollReveal>
            <p className="eyebrow" style={{ color: '#FCA311' }}>Our Journey</p>
            <h1 className="page-hero__title">Software built with<br /><span className="about-hero-accent">purpose &amp; passion</span></h1>
            <p className="page-hero__sub">We started with a question: why does great software have to be exclusive? Paverasa is our answer.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <ScrollReveal>
              <div>
                <p className="eyebrow">Our Story</p>
                <h2 className="about-section-title">From a university lab to a continental platform</h2>
                <div className="about-story-text">
                  <p>Paverasa began in 2022 when three university friends — a software engineer, a designer, and a business strategist — noticed a gap: African businesses were being underserved by software that was too expensive, too complex, or too foreign to their context.</p>
                  <p>We built our first product for a small logistics company that was tracking deliveries on paper. When we handed them a live dashboard that showed their fleet in real time, the founder cried. That moment defined everything we do.</p>
                  <p>Today, Paverasa serves clients across multiple industries and countries, runs student innovation programs at universities, and ships our own products used by thousands of people. But that same spirit — software as a tool for liberation — remains at our core.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="msv-panel">

                {/* WHO WE ARE pill */}
                <div className="msv-eyebrow-wrap">
                  <span className="msv-eyebrow">Who We Are</span>
                </div>

                {/* Heading */}
                <h2 className="msv-title">Our Mission &amp; Vision</h2>
                <p className="msv-subtitle">
                  We are on a mission to build world-class software that empowers
                  businesses and <span className="msv-highlight">inspires innovators</span> everywhere.
                </p>

                {/* Mission card */}
                <div className="msv-card">
                  <div className="msv-card__icon-wrap">
                    <Target size={28} strokeWidth={1.8} />
                  </div>
                  <div className="msv-card__body">
                    <span className="msv-card__eyebrow">Mission</span>
                    <h3 className="msv-card__title">Our Mission</h3>
                    <div className="msv-card__bar" />
                    <p className="msv-card__desc">
                      To make world-class software development accessible to every
                      business and every student innovator, regardless of their budget
                      or background.
                    </p>
                  </div>
                </div>

                {/* Vision card */}
                <div className="msv-card">
                  <div className="msv-card__icon-wrap">
                    <Eye size={28} strokeWidth={1.8} />
                  </div>
                  <div className="msv-card__body">
                    <span className="msv-card__eyebrow">Vision</span>
                    <h3 className="msv-card__title">Our Vision</h3>
                    <div className="msv-card__bar" />
                    <p className="msv-card__desc">
                      A world where the best ideas — regardless of geography —
                      become the best software products.
                    </p>
                  </div>
                </div>

                {/* Stats bar */}
                <div className="msv-stats">
                  <div className="msv-stat">
                    <div className="msv-stat__icon"><Users2 size={22} /></div>
                    <span className="msv-stat__num">80+</span>
                    <span className="msv-stat__label">Clients Served</span>
                  </div>
                  <div className="msv-stat">
                    <div className="msv-stat__icon"><Users size={22} /></div>
                    <span className="msv-stat__num">25</span>
                    <span className="msv-stat__label">Team Members</span>
                  </div>
                  <div className="msv-stat">
                    <div className="msv-stat__icon"><ShieldCheck size={22} /></div>
                    <span className="msv-stat__num">3+</span>
                    <span className="msv-stat__label">Years Building</span>
                  </div>
                </div>

                {/* Trusted by */}
                <div className="msv-trusted">
                  <p className="msv-trusted__label">Trusted by Innovative Companies</p>
                  <div className="msv-trusted__logos">
                    <span className="msv-logo msv-logo--google">Google</span>
                    <span className="msv-logo msv-logo--microsoft">Microsoft</span>
                    <span className="msv-logo msv-logo--aws">aws</span>
                    <span className="msv-logo msv-logo--shopify">Shopify</span>
                    <span className="msv-logo msv-logo--stripe">stripe</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">Core Values</p>
              <h2>What we stand for</h2>
            </div>
          </ScrollReveal>
          <div className="grid-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="card about-value-card">
                  <div className="about-value-icon">
                    <v.icon size={24} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">Our Journey</p>
              <h2>Milestones that shaped us</h2>
            </div>
          </ScrollReveal>
          <div className="timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                  <div className="timeline-item__content">
                    <span className="timeline-item__year">{item.year}</span>
                    <h3 className="timeline-item__title">{item.title}</h3>
                    <p className="timeline-item__desc">{item.desc}</p>
                  </div>
                  <div className="timeline-item__dot" />
                </div>
              </ScrollReveal>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">What We Do</p>
              <h2>Seven practice areas, one goal</h2>
              <p>Every service we offer exists to help you move faster, reach further, and build smarter.</p>
            </div>
          </ScrollReveal>
          <div className="grid-3">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.id} delay={i * 60}>
                <div className="about-service-chip">
                  <div className="about-service-chip__dot" style={{ background: svc.color }} />
                  <span>{svc.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="section-cta">
              <Link to="/services" className="btn btn-primary">
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Team */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">Meet the Team</p>
              <h2>The people behind the products</h2>
              <p>A cross-disciplinary team of engineers, designers, and innovators — distributed across Africa and beyond.</p>
            </div>
          </ScrollReveal>
          <div className="grid-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 60}>
                <div className="team-card">
                  <div className="team-card__avatar" style={{ background: `${member.color}20`, color: member.color }}>
                    {member.initials}
                  </div>
                  <div className="team-card__info">
                    <h3 className="team-card__name">{member.name}</h3>
                    <p className="team-card__role">{member.role}</p>
                    <p className="team-card__bio">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="section-cta">
              <Link to="/team" className="btn btn-secondary">
                Full Team Directory <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Future */}
      <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">Our Future</p>
              <h2>Where we're going</h2>
              <p>The best of Paverasa is ahead of us — ambitious products, expanded programs, and global reach.</p>
            </div>
          </ScrollReveal>
          <div className="grid-3">
            {future.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="card">
                  <div className="icon-wrap icon-wrap-lg" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    <f.icon size={28} />
                  </div>
                  <h3 style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-xl)', fontWeight: 800 }}>{f.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-3)', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta-mini">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to work with us?</h2>
            <p>Tell us about your project — we respond within 24 hours.</p>
            <div className="closing-cta-mini__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
