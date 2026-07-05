import { Link } from 'react-router-dom';
import {
  ArrowRight, Globe, Smartphone, Palette, Brain, BarChart3, BarChart2,
  Cloud, GraduationCap, Lightbulb, ShieldCheck, Zap, Star,
  CheckCircle2, ChevronRight
} from 'lucide-react';
import { BeamsBackground } from '../components/ui/beams-background';
import { 
  HoverSlider, 
  HoverSliderImage, 
  HoverSliderImageWrap, 
  TextStaggerHover 
} from '../components/ui/animated-slideshow';
import ScrollReveal from '../components/ScrollReveal';
import CountUp from '../components/CountUp';
import { ExpandingCards } from '../components/ExpandingCards';
import { services } from '../data/services';
import { products } from '../data/products';
import { team } from '../data/team';
import { posts } from '../data/blog';
import './home.css';

const iconMap = {
  Globe, Smartphone, Palette, Brain, BarChart3, Cloud, GraduationCap,
};

const partners = [
  'redlix', 'UMA enterprises', 'kumar textiles', 'mayur&capitals', 'abs photography',
];

const capabilities = [
  { icon: Globe, label: 'Business Software', desc: 'ERP, CRM, custom platforms' },
  { icon: Brain, label: 'AI Solutions', desc: 'LLMs, computer vision, NLP' },
  { icon: Smartphone, label: 'Mobile Apps', desc: 'iOS, Android, cross-platform' },
  { icon: Cloud, label: 'Cloud Infrastructure', desc: 'AWS, GCP, Azure, DevOps' },
  { icon: BarChart3, label: 'Data & Analytics', desc: 'Pipelines, BI, dashboards' },
];

const processSteps = [
  { num: '01', label: 'Discover', icon: Lightbulb, desc: 'We listen deeply and map your vision, goals, and constraints.' },
  { num: '02', label: 'Design', icon: Palette, desc: 'Wireframes, prototypes, and design systems aligned to your brand.' },
  { num: '03', label: 'Build', icon: CheckCircle2, desc: 'Agile sprints, clean code, rigorous QA, transparent progress.' },
  { num: '04', label: 'Launch', icon: Zap, desc: 'CI/CD pipelines for smooth, zero-downtime deployments.' },
  { num: '05', label: 'Support', icon: ShieldCheck, desc: 'Ongoing maintenance, monitoring, and feature evolution.' },
];

const strengths = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    desc: 'We explore emerging technologies and apply them pragmatically to create real competitive advantages.',
    color: '#14213D',
    bgColor: '#FFFFFF',
  },
  {
    icon: Star,
    title: 'Quality Obsessed',
    desc: 'Every feature is crafted with precision. We ship work we\'re proud of — always.',
    color: '#FCA311',
    bgColor: '#FFFFFF',
  },
  {
    icon: ShieldCheck,
    title: 'Security Built In',
    desc: 'Security is not an afterthought. We architect with zero-trust principles from day one.',
    color: '#14213D',
    bgColor: '#FFFFFF',
  },
  {
    icon: Zap,
    title: 'Speed & Agility',
    desc: 'We move fast without breaking things — lean processes, clear communication, rapid delivery.',
    color: '#FCA311',
    bgColor: '#FFFFFF',
  },
];

const stats = [
  { end: 120, suffix: '+', label: 'Projects Delivered' },
  { end: 80, suffix: '+', label: 'Clients Served' },
  { end: 25, suffix: '', label: 'Team Members' },
  { end: 4, suffix: '', label: 'Years Active' },
];

const homeExpandingItems = [
  {
    id: 'paverasa-suite',
    title: 'Paverasa Suite',
    description: 'All-in-one ERP platform — project management, HR, finance & client management in a single seamless interface.',
    imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    icon: <BarChart3 size={24} />,
    linkHref: '/products',
  },
  {
    id: 'intelliflow',
    title: 'IntelliFlow',
    description: 'AI-powered workflow automation that learns your patterns and continuously optimises operations.',
    imgSrc: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
    icon: <Brain size={24} />,
    linkHref: '/products',
  },
  {
    id: 'campuslink',
    title: 'CampusLink',
    description: 'Connecting student innovators, mentors & investors. Post projects, find co-founders, showcase your work.',
    imgSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    icon: <GraduationCap size={24} />,
    linkHref: '/products',
  },
  {
    id: 'hostel-management',
    title: 'Hostel Management',
    description: 'A complete solution for hostel administrators to manage bookings, resident data, fees, and maintenance requests efficiently.',
    imgSrc: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    icon: <Globe size={24} />,
    linkHref: '/products',
  },
  {
    id: '2r-menu-ordering',
    title: '2R Menu Ordering',
    description: 'Digital menu and ordering system for restaurants. Guests can scan, order, and pay directly from their smartphones.',
    imgSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    icon: <Smartphone size={24} />,
    linkHref: '/products',
  },
  {
    id: 'skill-exchange',
    title: 'Skill Exchange',
    description: 'A community platform where users can trade their expertise. Teach what you know, learn what you need.',
    imgSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    icon: <GraduationCap size={24} />,
    linkHref: '/products',
  },
  {
    id: 'picsidrop',
    title: 'PicsiDrop',
    description: 'A seamless platform to easily drop, share, and manage pictures and media files securely with clients and stakeholders.',
    imgSrc: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
    icon: <Globe size={24} />,
    linkHref: '/products',
  },
];

const SLIDES = [
  {
    id: "slide-0",
    title: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop"
  },
  {
    id: "slide-1",
    title: "Mobile Development",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2487&auto=format&fit=crop"
  },
  {
    id: "slide-2",
    title: "AI Solutions",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2487&auto=format&fit=crop"
  },
  {
    id: "slide-3",
    title: "Data Analytics",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2487&auto=format&fit=crop"
  },
  {
    id: "slide-4",
    title: "Cloud & DevOps",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2487&auto=format&fit=crop"
  },
  {
    id: "slide-5",
    title: "Student Innovation",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2487&auto=format&fit=crop"
  },
  {
    id: "slide-6",
    title: "Google Analytics & SEO",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2487&auto=format&fit=crop"
  },
  {
    id: "slide-7",
    title: "System Architecture",
    imageUrl: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2487&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="home">
      {/* ─────────── HERO ─────────── */}
      <section id="top">
        <BeamsBackground className="w-full min-h-screen flex flex-col items-center justify-center">
          <div className="container hero__content z-10 pt-24 pb-12">
            <h1 className="hero__headline">
              Build Software<br />
              <span className="hero__headline-accent">That Moves</span><br />
              the World
            </h1>
            <p className="hero__tagline">
              Paverasa engineers world-class digital products — from AI-powered platforms
              to student innovation hubs. We build with purpose, ship with precision,
              and grow with you.
            </p>
            <div className="hero__actions">
              <Link to="/services" className="btn btn-primary btn-lg">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn btn-secondary btn-lg">
                View Products
              </Link>
            </div>
            <div className="hero__social-proof mt-8">
              <div className="hero__avatars">
                {['SM', 'KO', 'AD', 'JK'].map((init, i) => (
                  <div key={i} className="hero__avatar" style={{ left: i * 24 }}>
                    {init}
                  </div>
                ))}
              </div>
              <p>Trusted by <strong>80+ clients</strong> worldwide</p>
            </div>
          </div>
        </BeamsBackground>
      </section>

      {/* ─────────── TRUSTED BY ─────────── */}
      <section className="trusted-by">
        <div className="container">
          <p className="trusted-by__label eyebrow">Trusted by forward-thinking companies</p>
        </div>
        <div className="logo-strip">
          <div className="logo-strip__track">
            {[...partners, ...partners].map((name, i) => (
              <div key={i} className="logo-strip__item">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── WHO WE ARE ─────────── */}
      <section className="section who-we-are">
        <div className="container">
          <div className="who-we-are__grid">
            <ScrollReveal>
              <div className="who-we-are__text">
                <p className="eyebrow">Who We Are</p>
                <h2 className="title">A tech company that cares about builders</h2>
                <p className="who-we-are__body">
                  Paverasa is a software company on a mission to make powerful digital tools
                  accessible to everyone — from enterprise businesses to student innovators
                  working out of university labs. We combine deep technical expertise with
                  genuine care for the people and organizations we serve.
                </p>
                <p className="who-we-are__body">
                  Founded in 2022, we've grown into a 25-person team delivering across
                  web, mobile, AI, cloud, and data — without ever losing our human touch.
                </p>
                <Link to="/about" className="btn btn-secondary">
                  Our Journey <ChevronRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="who-we-are__visual">
                <div className="who-we-are__card">
                  <div className="who-we-are__card-item">
                    <div className="who-we-are__card-num">120+</div>
                    <div className="who-we-are__card-label">Projects Shipped</div>
                  </div>
                  <div className="who-we-are__card-divider" />
                  <div className="who-we-are__card-item">
                    <div className="who-we-are__card-num">4</div>
                    <div className="who-we-are__card-label">Years of Innovation</div>
                  </div>
                  <div className="who-we-are__card-divider" />
                  <div className="who-we-are__card-item">
                    <div className="who-we-are__card-num">25</div>
                    <div className="who-we-are__card-label">Expert Engineers</div>
                  </div>
                </div>
                <div className="who-we-are__values">
                  {['Mission-Driven', 'Student-Friendly', 'Innovation-First', 'People-Centered'].map(v => (
                    <span key={v} className="who-we-are__tag">{v}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────── WHAT WE BUILD ─────────── */}
      <section className="section what-we-build">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">What We Build</p>
              <h2>Our core capabilities</h2>
              <p>From elegant web apps to autonomous AI systems — we cover the full spectrum of modern software development.</p>
            </div>
          </ScrollReveal>
          <div className="capabilities-grid">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.label} delay={i * 80}>
                <div className="capability-card">
                  <div className="capability-card__icon">
                    <cap.icon size={24} />
                  </div>
                  <h3 className="capability-card__title">{cap.label}</h3>
                  <p className="capability-card__desc">{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── OUR EXPERTISE (ANIMATED SLIDESHOW) ─────────── */}
      <section className="section bg-[var(--color-bg)] text-[var(--color-text)]">
        <div className="container">
          <ScrollReveal>
            <div className="services-split-header mb-12">
              <div className="services-split-header__left">
                <span className="services-pill-label">What We Do</span>
                <h2 className="services-split-title">
                  OUR <span className="services-split-title__accent">EXPERTISE</span>
                </h2>
              </div>
            </div>
          </ScrollReveal>
          
          <HoverSlider className="place-content-center p-6 md:px-12 min-h-[60vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
              <div className="flex flex-col items-start space-y-3 md:space-y-5">
                {SLIDES.map((slide, index) => (
                  <TextStaggerHover
                    key={slide.title}
                    index={index}
                    className="cursor-pointer text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter"
                    text={slide.title}
                  />
                ))}
              </div>
              <HoverSliderImageWrap className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                {SLIDES.map((slide, index) => (
                  <div key={slide.id} className="size-full">
                    <HoverSliderImage
                      index={index}
                      imageUrl={slide.imageUrl}
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="size-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
            </div>
          </HoverSlider>
        </div>
      </section>

      {/* ─────────── PRODUCTS ─────────── */}
      <section className="section products-preview" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">

          {/* Split Header */}
          <ScrollReveal>
            <div className="products-header">
              <div className="products-header__left">
                <p className="eyebrow">Our Products</p>
                <h2 className="products-header__title">Software built to last</h2>
              </div>
              <div className="products-header__right">
                <p className="products-header__desc">
                  Paverasa ships its own products — purpose-built tools that solve real problems with real elegance.
                </p>
                <Link to="/products" className="btn btn-secondary">
                  View All Products <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Expanding Cards ── */}
          <ScrollReveal delay={100}>
            <div className="home-expanding-wrap">
              <ExpandingCards items={homeExpandingItems} defaultActiveIndex={0} />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ─────────── OUR PROCESS ─────────── */}
      <section className="section process">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">Our Process</p>
              <h2>How we bring ideas to life</h2>
              <p>A proven five-step framework that keeps projects on track, on budget, and exceeding expectations.</p>
            </div>
          </ScrollReveal>
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 100}>
                <div className="process-step">
                  <div className="process-step__num">{step.num}</div>
                  <div className="process-step__icon-wrap">
                    <step.icon size={22} />
                  </div>
                  <h3 className="process-step__label">{step.label}</h3>
                  <p className="process-step__desc">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="process-step__connector" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── WHY CHOOSE PAVERASA ─────────── */}
      <section className="section why-us">
        {/* Decorative background dots */}
        <div className="why-us__dot why-us__dot--tl" />
        <div className="why-us__dot why-us__dot--tr" />
        <div className="why-us__dot why-us__dot--bl" />
        <div className="why-us__dot why-us__dot--br" />
        <div className="why-us__dot why-us__dot--ml" />
        <div className="why-us__dot why-us__dot--mr" />
        <div className="why-us__grid-dots why-us__grid-dots--left" />
        <div className="why-us__grid-dots why-us__grid-dots--right" />
        <div className="container">
          <ScrollReveal>
            <div className="why-us__header">
              <span className="why-us__eyebrow">Why Paverasa</span>
              <h2 className="why-us__title">
                Built <em className="why-us__title-accent">differently,</em> for a reason
              </h2>
              <div className="why-us__title-bar" />
              <p className="why-us__subtitle">
                At Paverasa, we don't just build software — we build solutions<br />
                that create impact and stand the test of time.
              </p>
            </div>
          </ScrollReveal>
          <div className="why-us__cards">
            {strengths.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="strength-card">
                  <div className="strength-card__icon-wrap" style={{ background: s.bgColor }}>
                    <s.icon size={22} color={s.color} strokeWidth={2} />
                  </div>
                  <h3 className="strength-card__title">{s.title}</h3>
                  <div className="strength-card__title-bar" style={{ background: s.color }} />
                  <p className="strength-card__desc">{s.desc}</p>
                  <button className="strength-card__arrow" style={{ background: s.bgColor, color: s.color }} aria-label={`Learn more about ${s.title}`}>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── STATISTICS ─────────── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="stat-card">
                  <div className="stat-card__num">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="stat-card__label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TEAM PREVIEW ─────────── */}
      <section className="section team-preview">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">The Team</p>
              <h2>Built by passionate people</h2>
              <p>Our multidisciplinary team brings together engineers, designers, strategists, and educators united by one mission.</p>
            </div>
          </ScrollReveal>
          <div className="team-preview-grid">
            {team.slice(0, 4).map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 80}>
                <div className="team-preview-card">
                  <div className="team-preview-card__avatar" style={{ background: `${member.color}20`, color: member.color }}>
                    {member.initials}
                  </div>
                  <h3 className="team-preview-card__name">{member.name}</h3>
                  <p className="team-preview-card__role">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="section-cta">
              <Link to="/team" className="btn btn-secondary btn-lg">
                Meet the Full Team <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── BLOG PREVIEW ─────────── */}
      <section className="section blog-preview">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">Latest Insights</p>
              <h2>From our team's minds</h2>
              <p>Thoughts on technology, design, engineering culture, and building the future.</p>
            </div>
          </ScrollReveal>
          <div className="grid-3 blog-grid">
            {posts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card__thumb" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <span className="blog-card__category">{post.category}</span>
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__footer">
                      <span className="blog-card__author">By {post.author}</span>
                      <span className="blog-card__read-more">Read →</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="section-cta">
              <Link to="/blog" className="btn btn-secondary btn-lg">
                All Articles <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── CLOSING CTA ─────────── */}
      <section className="closing-cta p-0">
        <BeamsBackground className="w-full flex flex-col items-center justify-center min-h-[60vh]">
          <div className="container closing-cta__content z-10 text-center">
            <ScrollReveal>
              <p className="eyebrow" style={{ color: '#FCA311' }}>Ready to Build?</p>
              <h2 className="closing-cta__headline">
                Let's create something<br />
                <span className="closing-cta__accent">extraordinary together</span>
              </h2>
              <p className="closing-cta__sub">
                Whether you have a fully-formed brief or just an idea on a napkin,
                we'd love to hear from you.
              </p>
              <div className="closing-cta__actions justify-center">
                <Link to="/contact" className="btn btn-primary btn-lg closing-cta__btn-primary">
                  Contact Us <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg closing-cta__btn-secondary">
                  Schedule a Meeting
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </BeamsBackground>
      </section>
    </div>
  );
}
