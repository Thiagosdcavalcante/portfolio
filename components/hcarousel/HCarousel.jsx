import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './HCarousel.css';

function wrapIndex(index, length) {
  return ((index % length) + length) % length;
}

function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function HCarousel({
  items = [],
  renderItem,
  glowColor = '#24A29E',
  accentColor = '#178582',
  autoplay = false,
  interval = 5000,
  showIndicators = true,
  ariaLabel = 'Carrossel',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  const previousIndex = useMemo(
    () => (activeIndex === 0 ? items.length - 1 : activeIndex - 1),
    [activeIndex, items.length],
  );

  const nextIndex = useMemo(
    () => (activeIndex === items.length - 1 ? 0 : activeIndex + 1),
    [activeIndex, items.length],
  );

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev + 1, items.length));
  }, [items.length]);

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev - 1, items.length));
  }, [items.length]);

  const goToIndex = useCallback(
    (index) => {
      setActiveIndex(wrapIndex(index, items.length));
    },
    [items.length],
  );

  useEffect(() => {
    if (!autoplay || items.length <= 1) {
      return undefined;
    }

    const id = window.setInterval(goToNext, interval);
    return () => window.clearInterval(id);
  }, [autoplay, interval, goToNext, items.length]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || items.length <= 1) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const threshold = 48;

    if (deltaX > threshold) {
      goToPrevious();
    } else if (deltaX < -threshold) {
      goToNext();
    }

    touchStartX.current = null;
  };

  if (!items.length) {
    return null;
  }

  const canNavigate = items.length > 1;
  const renderContent = (item) => {
    const rendered = renderItem(item);
    return rendered?.node ?? rendered;
  };

  return (
    <div
      className="hcarousel"
      style={{
        '--hcarousel-glow': glowColor,
        '--hcarousel-accent': accentColor,
      }}
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hcarousel-stage">
        {canNavigate ? (
          <div className="hcarousel-item previous" aria-hidden="true">
            <div className="hcarousel-card-inner">{renderContent(items[previousIndex])}</div>
          </div>
        ) : null}

        <div className="hcarousel-item active">
          <div className="hcarousel-card-inner">{renderContent(items[activeIndex])}</div>

          {canNavigate ? (
            <>
              <button type="button" className="hcarousel-arrow left" onClick={goToPrevious} aria-label="Item anterior">
                <ChevronLeft />
              </button>
              <button type="button" className="hcarousel-arrow right" onClick={goToNext} aria-label="Próximo item">
                <ChevronRight />
              </button>
            </>
          ) : null}
        </div>

        {canNavigate ? (
          <div className="hcarousel-item next" aria-hidden="true">
            <div className="hcarousel-card-inner">{renderContent(items[nextIndex])}</div>
          </div>
        ) : null}
      </div>

      {showIndicators && canNavigate ? (
        <div className="hcarousel-indicators" role="tablist" aria-label="Indicadores do carrossel">
          {items.map((item, index) => {
            const key = item.id ?? item.title ?? item.name ?? index;

            return (
              <button
                key={key}
                type="button"
                role="tab"
                className={`hcarousel-dot${index === activeIndex ? ' active' : ''}`}
                aria-label={`Ir para item ${index + 1}`}
                aria-selected={index === activeIndex}
                onClick={() => goToIndex(index)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
