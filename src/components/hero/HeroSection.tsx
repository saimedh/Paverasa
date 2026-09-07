import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import JourneyNetwork from './DeliveryNetwork';
import './hero.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero Section for Paverasa — "Build Software That Moves The World"
 *
 * White/light themed, matching existing Paverasa brand identity.
 * Animated software journey: Person → Idea → Paverasa → Design/Build/Launch → Product → Users
 * Uses GSAP for entrance animation + ScrollTrigger for scroll-linked progress.
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const [networkRevealed, setNetworkRevealed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const progressRef = useRef({ value: 0 });
  const autoplayTlRef = useRef<gsap.core.Timeline | null>(null);
  const loopTlRef = useRef<gsap.core.Timeline | null>(null);

  // Responsive check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const prefersReducedMotion = useCallback(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // ── Intro animation ──
  useEffect(() => {
    if (prefersReducedMotion()) {
      setNetworkRevealed(true);
      setProgress(0.5);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (headlineRef.current) {
        gsap.set(headlineRef.current, { opacity: 0, y: 30 });
        tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.1);
      }
      if (taglineRef.current) {
        gsap.set(taglineRef.current, { opacity: 0, y: 20 });
        tl.to(taglineRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.3);
      }
      if (actionsRef.current) {
        gsap.set(actionsRef.current, { opacity: 0, y: 20 });
        tl.to(actionsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.5);
      }

      tl.call(() => setNetworkRevealed(true), [], 0.7);

      // Auto-play journey: 0 → 1 over ~5s
      tl.to(progressRef.current, {
        value: 1,
        duration: 5,
        ease: 'power1.inOut',
        onUpdate: () => setProgress(progressRef.current.value),
      }, 1.0);

      autoplayTlRef.current = tl;
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // ── ScrollTrigger ──
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          if (autoplayTlRef.current && autoplayTlRef.current.progress() >= 1) {
            setProgress(self.progress);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // ── Continuous subtle loop after autoplay ──
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let rafId: number;
    let started = false;

    const check = () => {
      if (autoplayTlRef.current && autoplayTlRef.current.progress() >= 1 && !started) {
        started = true;
        const loop = gsap.timeline({ repeat: -1, yoyo: true });
        loop.to(progressRef.current, {
          value: 0.88,
          duration: 3.5,
          ease: 'sine.inOut',
          onUpdate: () => setProgress(progressRef.current.value),
        });
        loop.to(progressRef.current, {
          value: 1,
          duration: 3.5,
          ease: 'sine.inOut',
          onUpdate: () => setProgress(progressRef.current.value),
        });
        loopTlRef.current = loop;
      }
      rafId = requestAnimationFrame(check);
    };

    rafId = requestAnimationFrame(check);
    return () => {
      cancelAnimationFrame(rafId);
      if (loopTlRef.current) loopTlRef.current.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="hero-journey"
      aria-label="Paverasa — Build Software That Moves The World"
    >
      {/* Atmospheric glows */}
      <div className="hero-journey__glow--tr" aria-hidden="true" />
      <div className="hero-journey__glow--bl" aria-hidden="true" />

      <div className="hero-journey__inner">
        {/* ── Left: Content ── */}
        <div className="hero-journey__content">
          <h1 ref={headlineRef} className="hero-journey__headline">
            Build Software
            <br />
            <span className="hero-journey__headline-accent">That Moves</span>
            <br />
            the World
          </h1>

          <p ref={taglineRef} className="hero-journey__tagline">
            We design, build, and deliver digital products that turn ideas into real&#8209;world impact.
          </p>

          <div ref={actionsRef} className="hero-journey__actions">
            <Link
              to="/services"
              className="hero-journey__btn-primary"
              id="hero-cta-services"
            >
              Explore Services <ArrowRight size={18} />
            </Link>
            <Link
              to="/products"
              className="hero-journey__btn-secondary"
              id="hero-cta-products"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* ── Right: Journey Network ── */}
        <div className="hero-journey__network-wrap" aria-hidden="true">
          <JourneyNetwork
            progress={progress}
            revealed={networkRevealed}
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
}
