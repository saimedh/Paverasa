import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Star, ChevronDown, ChevronUp, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './contact.css';

const faqs = [
  {
    q: 'How quickly can you start on a project?',
    a: 'For most projects, we can begin within 1–2 weeks of contract signing. For urgent engagements, we can often mobilize within 48–72 hours.'
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Absolutely. We love working with early-stage founders. We offer flexible engagement models — from fixed-scope MVPs to ongoing advisory and development partnerships.'
  },
  {
    q: 'What does a typical engagement look like?',
    a: 'We start with a free discovery call to understand your goals. From there, we scope the project, agree on milestones and pricing, and kick off with a detailed project plan. We run agile sprints with weekly check-ins.'
  },
  {
    q: 'Do you offer student discounts?',
    a: 'Yes! Paverasa offers substantial discounts and in some cases free access to tools and mentorship for student-led projects. Reach out via the contact form and mention your student status.'
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'Our core stack includes React, Next.js, Node.js, Python, React Native, Flutter, AWS, GCP, and various AI/ML frameworks. We also work with whatever stack your existing product requires.'
  },
  {
    q: 'Can you take over an existing codebase?',
    a: 'Yes. We regularly inherit legacy codebases. We begin with a codebase audit, provide a health report, and propose a modernization or maintenance roadmap before any work begins.'
  },
];

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

const getDays = () => {
  const days = [];
  const now = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      days.push(d);
    }
  }
  return days;
};

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="star-rating" role="radiogroup" aria-label="Rating">
      {[1,2,3,4,5].map(n => (
        <button
          key={n}
          type="button"
          className={`star-rating__star ${(hovered ?? value) >= n ? 'star-rating__star--active' : ''}`}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onChange(n)}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
        >
          <Star size={24} />
        </button>
      ))}
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__trigger" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className="faq-item__body" style={{ maxHeight: open ? '300px' : '0' }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [meetingBooked, setMeetingBooked] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const days = getDays();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleBookMeeting = (e) => {
    e.preventDefault();
    if (selectedDay && selectedSlot) setMeetingBooked(true);
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    if (rating > 0) setFeedbackSent(true);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero page-hero--light" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container page-hero__content">
          <ScrollReveal>
            <p className="eyebrow" style={{ color: 'var(--color-primary)' }}>Get In Touch</p>
            <h1 className="contact-hero-title">Let's build something<br />great together</h1>
            <p className="page-hero__sub" style={{ color: 'var(--color-text-muted)' }}>
              Tell us about your project, ask us anything, or just say hello. We respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="contact-form-card">
                <h2 className="contact-card-title">Send us a message</h2>
                {formSent ? (
                  <div className="contact-success">
                    <CheckCircle2 size={48} className="contact-success__icon" />
                    <h3>Message received!</h3>
                    <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          className="form-input"
                          placeholder="Sarah Johnson"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-input"
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select
                        id="subject"
                        className="form-input form-select"
                        value={formData.subject}
                        onChange={e => setFormData({...formData, subject: e.target.value})}
                        required
                      >
                        <option value="">Select a topic…</option>
                        <option>Web or Mobile Development</option>
                        <option>AI / Data Solutions</option>
                        <option>Product Inquiry</option>
                        <option>Student Innovation Program</option>
                        <option>Partnership or Investment</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        id="message"
                        className="form-input form-textarea"
                        placeholder="Tell us about your project, timeline, and budget…"
                        rows={6}
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg contact-submit">
                      Send Message <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Info sidebar */}
            <div className="contact-info">
              <ScrollReveal delay={100}>
                <div className="contact-info-card">
                  <h3 className="contact-info-card__title">Contact Details</h3>
                  <div className="contact-details">
                    <div className="contact-detail">
                      <div className="contact-detail__icon"><Mail size={18} /></div>
                      <div>
                        <p className="contact-detail__label">Email</p>
                        <p className="contact-detail__value">hello@paverasa.com</p>
                      </div>
                    </div>
                    <div className="contact-detail">
                      <div className="contact-detail__icon"><Phone size={18} /></div>
                      <div>
                        <p className="contact-detail__label">Phone</p>
                        <p className="contact-detail__value">+91 81254 32177</p>
                      </div>
                    </div>
                    <div className="contact-detail">
                      <div className="contact-detail__icon"><MapPin size={18} /></div>
                      <div>
                        <p className="contact-detail__label">Office</p>
                        <p className="contact-detail__value">Middle town medchal</p>
                      </div>
                    </div>
                    <div className="contact-detail">
                      <div className="contact-detail__icon"><Clock size={18} /></div>
                      <div>
                        <p className="contact-detail__label">Hours</p>
                        <p className="contact-detail__value">Mon–Fri, 9 AM – 6 PM WAT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Experience Rating */}
              <ScrollReveal delay={150}>
                <div className="contact-info-card">
                  {feedbackSent ? (
                    <div className="contact-success" style={{ padding: 0 }}>
                      <CheckCircle2 size={32} className="contact-success__icon" />
                      <h3>Thanks for your feedback!</h3>
                      <p>We really appreciate you taking the time.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFeedback}>
                      <h3 className="contact-info-card__title">Rate Your Experience</h3>
                      <p className="contact-info-card__sub">How was your visit to Paverasa today?</p>
                      <StarRating value={rating} onChange={setRating} />
                      <textarea
                        className="form-input form-textarea"
                        placeholder="Any quick thoughts? (optional)"
                        rows={3}
                        value={feedback}
                        onChange={e => setFeedback(e.target.value)}
                        style={{ marginTop: 'var(--space-4)' }}
                      />
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        style={{ marginTop: 'var(--space-4)', width: '100%', justifyContent: 'center' }}
                        disabled={rating === 0}
                      >
                        Submit Feedback
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Meeting */}
      <section className="section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">Schedule a Meeting</p>
              <h2>Pick a time that works for you</h2>
              <p>Book a free 30-minute discovery call with our team. No sales pressure — just a conversation.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            {meetingBooked ? (
              <div className="meeting-success">
                <CheckCircle2 size={56} />
                <h3>Meeting confirmed!</h3>
                <p>
                  You're booked for <strong>{selectedSlot}</strong> on{' '}
                  <strong>{selectedDay?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong>.
                  Check your email for a calendar invite.
                </p>
              </div>
            ) : (
              <form className="meeting-scheduler" onSubmit={handleBookMeeting}>
                <div className="meeting-scheduler__section">
                  <h3 className="meeting-scheduler__label">
                    <Calendar size={18} /> Select a Date
                  </h3>
                  <div className="day-picker">
                    {days.slice(0, 10).map((day, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`day-btn ${selectedDay?.toDateString() === day.toDateString() ? 'day-btn--active' : ''}`}
                        onClick={() => setSelectedDay(day)}
                      >
                        <span className="day-btn__weekday">{day.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                        <span className="day-btn__date">{day.getDate()}</span>
                        <span className="day-btn__month">{day.toLocaleDateString('en-US', { month: 'short' })}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {selectedDay && (
                  <div className="meeting-scheduler__section">
                    <h3 className="meeting-scheduler__label">
                      <Clock size={18} /> Select a Time
                    </h3>
                    <div className="time-picker">
                      {timeSlots.map(slot => (
                        <button
                          key={slot}
                          type="button"
                          className={`time-btn ${selectedSlot === slot ? 'time-btn--active' : ''}`}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={!selectedDay || !selectedSlot}
                  style={{ alignSelf: 'flex-start' }}
                >
                  Confirm Booking <ArrowRight size={18} />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="eyebrow">FAQ</p>
              <h2>Common questions</h2>
              <p>Everything you need to know before reaching out.</p>
            </div>
          </ScrollReveal>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <FAQ q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
