import React, { useEffect, useMemo, useState } from 'react';

function wrapIndex(index, length) {
  return ((index % length) + length) % length;
}

export function CarrosselInterativo({ title, subtitle = null, items, renderItem, footer = null, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  const hasSubtitle = Boolean(subtitle);

  const currentItem = useMemo(() => {
    if (!items.length) {
      return null;
    }

    return items[wrapIndex(activeIndex, items.length)];
  }, [activeIndex, items]);

  if (!items.length) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((current) => wrapIndex(current - 1, items.length));
  };

  const goToNext = () => {
    setActiveIndex((current) => wrapIndex(current + 1, items.length));
  };

  const renderedItem = renderItem(currentItem, activeIndex);

  return (
    <article className={`box interactive-carousel ${hasSubtitle ? 'info-card-with-subtitle' : 'info-card-without-subtitle'} ${className}`.trim()}>
      <div className="carousel-header">
        <div className="carousel-heading-block">
          <h3>{title}</h3>
          {hasSubtitle ? <p className="card-subtitle">{subtitle}</p> : null}
        </div>
        <div className="carousel-controls" aria-label={`Navegação do carrossel ${title}`}>
          <button type="button" className="carousel-button" onClick={goToPrevious} aria-label={`Item anterior de ${title}`}>
            Prev
          </button>
          <button type="button" className="carousel-button" onClick={goToNext} aria-label={`Próximo item de ${title}`}>
            Next
          </button>
        </div>
      </div>

      <div className="carousel-stage" aria-live="polite">
        <div className="carousel-card">
          {renderedItem.node}
        </div>
      </div>

      <div className="carousel-footer-row">
        <p className="carousel-counter">
          {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </p>
        {footer ? (
          footer.type === 'button' ? (
            <a className="card-footer-button" href={footer.href} target={footer.external ? '_blank' : undefined} rel={footer.external ? 'noreferrer' : undefined}>
              {footer.label}
            </a>
          ) : (
            <p className="card-footer-text">{footer.text}</p>
          )
        ) : null}
      </div>
    </article>
  );
}