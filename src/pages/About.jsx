import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Lightbulb, Users, Users2, ShieldCheck, CheckCircle2, Rocket, Code, Globe, User } from 'lucide-react';
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
          <div className="about-hero-grid">
            <ScrollReveal className="about-hero-left">
              <p className="eyebrow" style={{ color: '#FCA311' }}>OUR JOURNEY</p>
              <h1 className="page-hero__title" style={{ textAlign: 'left' }}>
                <div>Built by <span style={{ color: '#FCA311' }}>Students.</span></div>
                <div>Driven by <span style={{ color: '#FCA311' }}>Innovation.</span></div>
                <div>Trusted by Businesses.</div>
              </h1>
              <div className="about-hero-text">
                <p>Paverasa began with four ambitious students who believed that innovation should never be limited by experience, age, or resources.</p>
                <p>What started inside classrooms, college labs, and late-night brainstorming sessions has evolved into a technology company building modern software, AI solutions, digital products, and opportunities for the next generation of innovators.</p>
                <p>Today, we partner with startups, businesses, and institutions to transform ideas into products that create real impact.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} className="about-hero-right">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Students collaborating" 
                className="about-hero-image"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story-section">
        <div className="container">
          <div className="about-story-new-grid">
            {/* Left Column */}
            <div className="about-story-left">
              <ScrollReveal>
                <p className="eyebrow" style={{ color: '#FCA311' }}>OUR STORY</p>
                <h2 className="about-section-title">From College Dreams to Real-World Impact</h2>
                <div className="about-story-text-new">
                  <p>Every company has a beginning. Ours wasn't in a corporate office. It started inside classrooms, college labs, libraries, and countless late-night discussions where four students shared one belief—Technology should create opportunities, not barriers.</p>
                  <p>Paverasa was founded with a simple mission: to develop exceptional software for businesses while empowering students with real industry experience, mentorship, and innovation.</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern Office Building" 
                  className="about-story-building-img" 
                />
              </ScrollReveal>

            </div>

            {/* Right Column (Cards) */}
            <div className="about-story-right">
              <ScrollReveal delay={150}>
                <div className="about-mvv-card">
                  <div className="about-mvv-icon"><Target size={32} /></div>
                  <div className="about-mvv-content">
                    <h4>OUR MISSION</h4>
                    <p>Building technology that creates opportunity. We build impactful solutions for businesses and empowering experiences for students.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="about-mvv-card">
                  <div className="about-mvv-icon"><Eye size={32} /></div>
                  <div className="about-mvv-content">
                    <h4>OUR VISION</h4>
                    <p>To become a globally recognized technology company that inspires innovation, empowers students, and transforms businesses.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <div className="about-mvv-card">
                  <div className="about-mvv-icon"><Heart size={32} /></div>
                  <div className="about-mvv-content">
                    <h4>OUR VALUES</h4>
                    <p>Innovation First • Student Empowerment<br/>Engineering Excellence • Integrity<br/>Continuous Learning • Impact Over Hype</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
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
