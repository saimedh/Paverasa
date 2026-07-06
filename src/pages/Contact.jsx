import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, CheckCircle2, ArrowRight, Calendar, Send, MessageSquare, Zap } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import "./contact.css";

const faqs = [
  { q: "How quickly can you start on a project?", a: "For most projects, we can begin within 1-2 weeks of contract signing. For urgent engagements, we can often mobilize within 48-72 hours." },
  { q: "Do you work with early-stage startups?", a: "Absolutely. We love working with early-stage founders. We offer flexible engagement models from fixed-scope MVPs to ongoing advisory and development partnerships." },
  { q: "What does a typical engagement look like?", a: "We start with a free discovery call to understand your goals. From there, we scope the project, agree on milestones and pricing, and kick off with a detailed project plan. We run agile sprints with weekly check-ins." },
  { q: "Do you offer student discounts?", a: "Yes! Paverasa offers substantial discounts and in some cases free access to tools and mentorship for student-led projects. Reach out via the contact form and mention your student status." },
  { q: "What technologies do you specialize in?", a: "Our core stack includes React, Next.js, Node.js, Python, React Native, Flutter, AWS, GCP, and various AI/ML frameworks. We also work with whatever stack your existing product requires." },
  { q: "Can you take over an existing codebase?", a: "Yes. We regularly inherit legacy codebases. We begin with a codebase audit, provide a health report, and propose a modernization or maintenance roadmap before any work begins." },
];

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

const getDays = () => {
  const days = [];
  const now = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(d);
  }
  return days;
};

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
      <button className="faq-item__trigger" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className="faq-item__body" style={{ maxHeight: open ? "300px" : "0" }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [meetingBooked, setMeetingBooked] = useState(false);
  const days = getDays();

  const handleSubmit = (e) => { e.preventDefault(); setFormSent(true); };
  const handleBookMeeting = (e) => { e.preventDefault(); if (selectedDay && selectedSlot) setMeetingBooked(true); };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero__blob contact-hero__blob--a" />
        <div className="contact-hero__blob contact-hero__blob--b" />
        <div className="contact-hero__blob contact-hero__blob--c" />

        <div className="container contact-hero__inner">
          <div className="contact-hero__left">
            <ScrollReveal>
              <span className="contact-eyebrow">Get In Touch</span>
              <h1 className="contact-hero__title">
                Let&apos;s build something<br />
                <span className="contact-hero__accent">extraordinary</span>
              </h1>
              <p className="contact-hero__sub">
                Tell us about your project, ask us anything, or just say hello.
                We respond within 24 hours.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="contact-quick-pills">
                <a href="mailto:hello@paverasa.com" className="contact-quick-pill">
                  <Mail size={15} /> hello@paverasa.com
                </a>
                <a href="tel:+918125432177" className="contact-quick-pill">
                  <Phone size={15} /> +91 81254 32177
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} className="contact-hero__right">
            <div className="contact-info-strip">
              {[
                { icon: <Mail size={18} />, label: "Email", val: "hello@paverasa.com" },
                { icon: <Phone size={18} />, label: "Phone", val: "+91 81254 32177" },
                { icon: <MapPin size={18} />, label: "Office", val: "Middle Town, Medchal" },
                { icon: <Clock size={18} />, label: "Hours", val: "Mon-Sat, 9 AM - 7 PM" },
              ].map(({ icon, label, val }) => (
                <div key={label} className="contact-info-item">
                  <div className="contact-info-item__icon">{icon}</div>
                  <div>
                    <p className="contact-info-item__label">{label}</p>
                    <p className="contact-info-item__val">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SPLIT: FORM + SCHEDULER */}
      <section className="section contact-split-section">
        <div className="container contact-split-grid">

          {/* Form */}
          <ScrollReveal className="contact-form-panel">
            <div className="contact-form-panel__header">
              <span className="contact-form-panel__badge"><MessageSquare size={13} /> Send a Message</span>
              <h2 className="contact-form-panel__title">Tell us about your project</h2>
              <p className="contact-form-panel__sub">We&apos;ll get back to you within 24 hours with a tailored response.</p>
            </div>
            {formSent ? (
              <div className="contact-success">
                <div className="contact-success__icon-wrap"><CheckCircle2 size={40} /></div>
                <h3>Message received!</h3>
                <p>Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input id="name" type="text" className="form-input" placeholder="Sarah Johnson" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input id="email" type="email" className="form-input" placeholder="sarah@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Topic</label>
                  <select id="subject" className="form-input form-select" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} required>
                    <option value="">Select a topic...</option>
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
                  <textarea id="message" className="form-input form-textarea" placeholder="Tell us about your project, timeline, and budget..." rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
                </div>
                <button type="submit" className="btn btn-primary contact-submit">
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Scheduler */}
          <ScrollReveal delay={150} className="contact-scheduler-panel">
            <div className="contact-form-panel__header">
              <span className="contact-form-panel__badge"><Zap size={13} /> Quick Book</span>
              <h2 className="contact-form-panel__title">Book a discovery call</h2>
              <p className="contact-form-panel__sub">Free 30-min call. No sales pressure, just a real conversation.</p>
            </div>
            {meetingBooked ? (
              <div className="contact-success">
                <div className="contact-success__icon-wrap"><CheckCircle2 size={40} /></div>
                <h3>Meeting confirmed!</h3>
                <p>
                  Booked for <strong>{selectedSlot}</strong> on{" "}
                  <strong>{selectedDay?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</strong>.
                  Check your email for the calendar invite.
                </p>
              </div>
            ) : (
              <form className="meeting-form" onSubmit={handleBookMeeting}>
                <div className="meeting-section">
                  <h3 className="meeting-section__label"><Calendar size={14} /> Select a Date</h3>
                  <div className="day-picker">
                    {days.slice(0, 10).map((day, i) => (
                      <button key={i} type="button" className={`day-btn ${selectedDay?.toDateString() === day.toDateString() ? "day-btn--active" : ""}`} onClick={() => setSelectedDay(day)}>
                        <span className="day-btn__weekday">{day.toLocaleDateString("en-US", { weekday: "short" })}</span>
                        <span className="day-btn__date">{day.getDate()}</span>
                        <span className="day-btn__month">{day.toLocaleDateString("en-US", { month: "short" })}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {selectedDay && (
                  <div className="meeting-section">
                    <h3 className="meeting-section__label"><Clock size={14} /> Select a Time</h3>
                    <div className="time-picker">
                      {timeSlots.map(slot => (
                        <button key={slot} type="button" className={`time-btn ${selectedSlot === slot ? "time-btn--active" : ""}`} onClick={() => setSelectedSlot(slot)}>{slot}</button>
                      ))}
                    </div>
                  </div>
                )}
                <button type="submit" className="btn btn-primary contact-submit" disabled={!selectedDay || !selectedSlot}>
                  Confirm Booking <ArrowRight size={15} />
                </button>
              </form>
            )}
          </ScrollReveal>

        </div>
      </section>

      {/* FAQ */}
      <section className="section contact-faq-section">
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
