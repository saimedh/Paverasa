import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './feature-steps.css';

export function FeatureSteps({
  features,
  title,
  autoPlayInterval = 3000,
}) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className="feature-steps">
      {title && <h2 className="feature-steps__title">{title}</h2>}

      <div className="feature-steps__grid">
        {/* Text side */}
        <div className="feature-steps__list">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`feature-steps__item ${index === currentFeature ? 'active' : ''}`}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`feature-steps__indicator ${index === currentFeature ? 'active' : ''}`}
              >
                {index <= currentFeature ? (
                  <span className="feature-steps__indicator-icon">✓</span>
                ) : (
                  <span className="feature-steps__indicator-num">{index + 1}</span>
                )}
              </motion.div>

              <div className="feature-steps__content-wrap">
                {feature.step && feature.title && (
                  <span className="feature-steps__eyebrow">{feature.step}</span>
                )}
                <h3 className="feature-steps__item-title">
                  {feature.title || feature.step}
                </h3>
                <p className="feature-steps__item-desc">
                  {feature.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image side */}
        <div className="feature-steps__image-wrap">
          <AnimatePresence mode="wait">
            {features.map(
              (feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={index}
                    className="feature-steps__image-container"
                    initial={{ y: 100, opacity: 0, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -100, opacity: 0, rotateX: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.step || feature.title}
                      className="feature-steps__image"
                    />
                    <div className="feature-steps__image-gradient" />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
