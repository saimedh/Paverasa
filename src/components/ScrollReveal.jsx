import { useEffect, useRef } from 'react';

/**
 * Wraps children and adds a scroll-triggered fade+slide-up reveal animation.
 * Uses IntersectionObserver under the hood.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  threshold = 0.15,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
