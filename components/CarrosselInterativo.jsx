import React from 'react';

import { HCarousel } from './hcarousel/index.js';

export function CarrosselInterativo({ title, subtitle = null, items, renderItem, footer = null, className = '' }) {
  const hasSubtitle = Boolean(subtitle);

  if (!items.length) {
    return null;
  }

  const resolveItem = (item) => {
    const rendered = renderItem(item);
    return rendered?.node ?? rendered;
  };

  return (
    <article className={`box interactive-carousel ${hasSubtitle ? 'info-card-with-subtitle' : 'info-card-without-subtitle'} ${className}`.trim()}>
      <div className="carousel-header">
        <div className="carousel-heading-block">
          <h3>{title}</h3>
          {hasSubtitle ? <p className="card-subtitle">{subtitle}</p> : null}
        </div>
      </div>

      <div className="carousel-stage" aria-live="polite">
        <HCarousel
          items={items}
          renderItem={resolveItem}
          glowColor="#24A29E"
          accentColor="#178582"
          ariaLabel={`Carrossel ${title}`}
        />
      </div>

      {footer ? (
        <div className="carousel-footer-row">
          {footer.type === 'button' ? (
            <a className="card-footer-button" href={footer.href} target={footer.external ? '_blank' : undefined} rel={footer.external ? 'noreferrer' : undefined}>
              {footer.label}
            </a>
          ) : (
            <p className="card-footer-text">{footer.text}</p>
          )}
        </div>
      ) : null}
    </article>
  );
}
