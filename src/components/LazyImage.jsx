import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export function LazyImage({
  alt,
  src,
  ratio = 16 / 9,
  fallback,
  inView = false,
  className = '',
  containerClassName = '',
}) {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [imgSrc, setImgSrc] = useState(inView ? undefined : src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (fallback) {
      setImgSrc(fallback);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Load image only when inView
  useEffect(() => {
    if (inView && isInView && !imgSrc) {
      setImgSrc(src);
    }
  }, [inView, isInView, src, imgSrc]);

  // Handle cached images instantly
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleLoad();
    }
  }, [imgSrc]);

  return (
    <div
      ref={ref}
      className={`lazy-image-container ${containerClassName}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Skeleton / fallback */}
      <div
        className={`lazy-image-skeleton ${!isLoading ? 'hidden' : ''}`}
      />

      {imgSrc && (
        <img
          ref={imgRef}
          alt={alt}
          src={imgSrc}
          className={`lazy-image-img ${!isLoading ? 'loaded' : ''} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          fetchPriority={inView ? 'high' : 'low'}
        />
      )}
    </div>
  );
}
