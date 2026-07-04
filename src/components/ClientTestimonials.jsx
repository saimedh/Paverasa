import { useRef } from 'react';
import { TimelineContent } from '../components/TimelineContent';
import './testimonials.css';

/* ── Testimonial data — adapted for Paverasa ── */
const testimonials = [
  {
    id: 1,
    quote:
      'Paverasa has been a game-changer for us. Their service is top-notch and their team is incredibly responsive.',
    name: 'Amara Diallo',
    title: 'CEO of NovaCorp',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop',
    variant: 'primary',
    col: 0,
    flex: 7,
    animationNum: 0,
  },
  {
    id: 2,
    quote: "We've seen incredible results. Their expertise and dedication speak for themselves.",
    name: 'Rika Shinoda',
    title: 'CEO of Kintsugi',
    img: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop',
    variant: 'blue',
    col: 0,
    flex: 3,
    animationNum: 1,
  },
  {
    id: 3,
    quote:
      'Their team is highly professional and their innovative solutions have transformed the way we operate.',
    name: 'Marcus Reeves',
    title: 'CEO of OdeaoLabs',
    img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop',
    variant: 'dark',
    col: 1,
    animationNum: 2,
  },
  {
    id: 4,
    quote: "We're extremely satisfied with Paverasa. Their expertise exceeded our expectations.",
    name: 'John Mensah',
    title: 'CEO of Labsbo',
    img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop',
    variant: 'dark',
    col: 1,
    animationNum: 3,
  },
  {
    id: 5,
    quote: 'Their customer support is absolutely exceptional — always available and incredibly helpful.',
    name: 'Steven Osei',
    title: 'CTO of Boxefi',
    img: 'https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=687&auto=format&fit=crop',
    variant: 'dark',
    col: 1,
    animationNum: 4,
  },
  {
    id: 6,
    quote: 'Paverasa has been a key partner in our growth journey. Truly world-class.',
    name: 'Léa Fontaine',
    title: 'CEO of AxisGroup',
    img: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop',
    variant: 'blue',
    col: 2,
    flex: 3,
    animationNum: 5,
  },
  {
    id: 7,
    quote:
      'Paverasa has been a true game-changer. Their exceptional service, combined with deep expertise and commitment to excellence, has made a significant impact on our business.',
    name: 'Paul Asante',
    title: 'CTO of Meridian Labs',
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
          <img
            src={t.img}
            alt={t.name}
            className="tcard__avatar"
            loading="lazy"
          />
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
          Trusted by startups and the world's largest companies
        </TimelineContent>
        <TimelineContent
          as="p"
          className="testimonials-header__sub"
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={sectionRef}
        >
          Here's what our clients say about working with Paverasa
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
