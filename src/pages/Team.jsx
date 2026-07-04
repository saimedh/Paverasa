import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ClientTestimonials from '../components/ClientTestimonials';
import './team.css';

export default function Team() {
  return (
    <div className="team-page">
      <section className="page-hero page-hero--indigo">
        <div className="container page-hero__content">
          <ScrollReveal>
            <p className="eyebrow" style={{ color: '#a5b4fc' }}>The Team</p>
            <h1 className="page-hero__title">Meet the people<br />
              <span className="about-hero-accent">who make it happen</span>
            </h1>
            <p className="page-hero__sub">
              Engineers, designers, innovators, and educators — united by a shared obsession with building software that matters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Client Testimonials ─── */}
      <ClientTestimonials />

      {/* Join Us CTA */}
      <section className="team-join">
        <div className="container">
          <ScrollReveal>
            <div className="team-join__content">
              <div className="team-join__text">
                <p className="eyebrow">Join Us</p>
                <h2>We're always looking for exceptional people</h2>
                <p>Paverasa is a place where ambitious people do the best work of their lives. If that sounds like you, we want to talk.</p>
              </div>
              <div className="team-join__cta">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  View Open Roles <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
