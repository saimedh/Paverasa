import { useState, useEffect, useMemo, forwardRef } from 'react';
import './ExpandingCards.css';

export const ExpandingCards = forwardRef(function ExpandingCards(
  { className = '', items, defaultActiveIndex = 0, ...props },
  ref
) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = useMemo(() => {
    if (activeIndex === null) return {};
    if (isDesktop) {
      const columns = items
        .map((_, i) => (i === activeIndex ? '5fr' : '1fr'))
        .join(' ');
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, i) => (i === activeIndex ? '5fr' : '1fr'))
        .join(' ');
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  return (
    <ul
      ref={ref}
      className={`expanding-cards ${className}`}
      style={{
        ...gridStyle,
        ...(isDesktop
          ? { gridTemplateRows: '1fr' }
          : { gridTemplateColumns: '1fr' }),
      }}
      {...props}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <li
            key={item.id}
            className={`expanding-cards__item${isActive ? ' expanding-cards__item--active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            tabIndex={0}
          >
            {/* Background image */}
            <img
              src={item.imgSrc}
              alt={item.title}
              className={`expanding-cards__img${isActive ? ' expanding-cards__img--active' : ''}`}
            />

            {/* Gradient overlay */}
            <div className="expanding-cards__overlay" />

            {/* Content */}
            <article className="expanding-cards__content">
              {/* Collapsed label — rotated title when not active (desktop only) */}
              <h3 className={`expanding-cards__collapsed-title${isActive ? ' expanding-cards__collapsed-title--hidden' : ''}`}>
                {item.title}
              </h3>

              {/* Active content — icon, title, description */}
              <div className={`expanding-cards__icon${isActive ? ' expanding-cards__icon--visible' : ''}`}>
                {item.icon}
              </div>

              <h3 className={`expanding-cards__active-title${isActive ? ' expanding-cards__active-title--visible' : ''}`}>
                {item.title}
              </h3>

              <p className={`expanding-cards__desc${isActive ? ' expanding-cards__desc--visible' : ''}`}>
                {item.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
});

ExpandingCards.displayName = 'ExpandingCards';
