import { useRef } from 'react';
import { TimelineContent } from '../components/TimelineContent';
import './testimonials.css';

/* ── Testimonial data — adapted for Paverasa ── */
const testimonials = [
  {
    id: 1,
    quote:
      'Driving vision, innovation, strategic growth, long-term business success.',
    name: 'Pavan',
    title: 'ceo and strategy lead',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop',
    variant: 'primary',
    col: 0,
    flex: 7,
    animationNum: 0,
  },
  {
    id: 2,
    quote: 'Spearheading our technical architecture and product development lifecycle to deliver cutting-edge solutions.',
    name: 'Saimedh',
    title: 'CTO and head of product delivery',
    img: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop',
    variant: 'blue',
    col: 0,
    flex: 3,
    animationNum: 1,
  },
  {
    id: 3,
    quote:
      'Ensuring operational excellence and developing high-performing teams.',
    name: 'Rakesh',
    title: 'COO and CPO(people officer)',
    img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop',
    variant: 'dark',
    col: 1,
    animationNum: 2,
  },
  {
    id: 4,
    quote: 'Managing financial performance while building strong brand and market presence.',
    name: 'Aravindh',
    title: 'CFO and CMO',
    img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop',
    variant: 'dark',
    col: 1,
    animationNum: 3,
  },
  {
    id: 5,
    quote: 'Building secure, scalable, reliable cloud infrastructure and platforms.',
    name: 'Dhanush',
    title: 'Cloud & Infrastructure Engineer',
    img: 'https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=687&auto=format&fit=crop',
    variant: 'dark',
    col: 1,
    animationNum: 4,
  },
  {
    id: 6,
    quote: 'Supporting operations, data-driven decisions, employee success.',
    name: 'Nandini',
    title: 'Operations, Analytics and People Associates',
    img: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop',
    variant: 'blue',
    col: 2,
    flex: 3,
    animationNum: 5,
  },
  {
    id: 8,
    quote: 'Supporting operations, data-driven decisions, employee success.',
    name: 'Gayatri',
    title: 'Operations, Analytics and People Associates',
    img: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop',
    variant: 'dark',
    col: 2,
    flex: 3,
    animationNum: 5.5,
  },
  {
    id: 7,
    quote:
      'Innovating next-generation solutions through research and emerging technologies.',
    name: 'Sahil baba',
    title: 'Research and Development Engineer',
    img: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop',
    variant: 'primary',
    col: 2,
    flex: 7,
    animationNum: 6,
  },
];

const col0 = testimonials.filter((t) => t.col === 0);
const col1 = testimonials.filter((t) => t.col === 1);
const col2 = testimonials.filter((t) => t.col === 2);

function TestimonialCard({ t, sectionRef }) {
  const revealVariants = {
    hidden: { opacity: 0, y: -20, filter: 'blur(10px)' },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { delay: i * 0.18, duration: 0.5 },
    }),
  };

  return (
    <TimelineContent
      animationNum={t.animationNum}
      customVariants={revealVariants}
      timelineRef={sectionRef}
      className={`tcard tcard--${t.variant}${t.flex ? ` tcard--flex${t.flex}` : ''}`}
    >
      {t.variant === 'primary' && <div className="tcard__grid-overlay" />}
      <article className="tcard__article">
        <p className="tcard__quote">{t.quote}</p>
        <div className="tcard__footer">
          <div className="tcard__person">
            <strong className="tcard__name">{t.name}</strong>
            <span className="tcard__title">{t.title}</span>
          </div>
          <div className="tcard__avatar tcard__avatar--initials" aria-label={t.name}>
            {t.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </article>
    </TimelineContent>
  );
}

export default function ClientTestimonials() {
  const sectionRef = useRef(null);

  const revealVariants = {
    hidden: { opacity: 0, y: -20, filter: 'blur(10px)' },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { delay: i * 0.4, duration: 0.5 },
    }),
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      {/* Header */}
      <div className="testimonials-header">
        <TimelineContent
          as="h2"
          className="testimonials-header__title"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={sectionRef}
        >
          <span style={{ color: '#000000' }}>Team of Paverasa</span>
        </TimelineContent>
      </div>

      {/* 3-column masonry grid */}
      <div className="testimonials-grid">
        {/* Column 0 */}
        <div className="tgrid-col">
          {col0.map((t) => (
            <TestimonialCard key={t.id} t={t} sectionRef={sectionRef} />
          ))}
        </div>
        {/* Column 1 */}
        <div className="tgrid-col">
          {col1.map((t) => (
            <TestimonialCard key={t.id} t={t} sectionRef={sectionRef} />
          ))}
        </div>
        {/* Column 2 */}
        <div className="tgrid-col">
          {col2.map((t) => (
            <TestimonialCard key={t.id} t={t} sectionRef={sectionRef} />
          ))}
        </div>
      </div>

      {/* Bottom decorative rule */}
      <div className="testimonials-rule">
        <div className="testimonials-rule__inner" />
      </div>
    </section>
  );
}
