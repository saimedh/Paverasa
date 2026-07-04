/**
 * TimelineContent
 * A framer-motion scroll-reveal wrapper.
 * Watches a parent ref (timelineRef) and fires the "visible" animation
 * when that container enters the viewport.
 */
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export function TimelineContent({
  as: Tag = 'div',
  children,
  className = '',
  animationNum = 0,
  customVariants,
  timelineRef,
  style,
  ...rest
}) {
  const controls = useAnimation();
  const ownRef = useRef(null);
  // Watch the provided timelineRef if given, else watch own element
  const refToWatch = timelineRef ?? ownRef;
  const isInView = useInView(refToWatch, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const defaultVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: (i ?? animationNum) * 0.12, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const variants = customVariants ?? defaultVariants;

  const MotionTag = motion[Tag] ?? motion.div;

  return (
    <MotionTag
      ref={ownRef}
      className={className}
      style={style}
      custom={animationNum}
      initial="hidden"
      animate={controls}
      variants={variants}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
