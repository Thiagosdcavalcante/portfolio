import React from 'react';

export function InfoCard({ title, subtitle = null, items, renderItem, footer = null, className = '' }) {
  const hasSubtitle = Boolean(subtitle);

  return (
    <article className={`box info-card ${hasSubtitle ? 'info-card-with-subtitle' : 'info-card-without-subtitle'} ${className}`.trim()}>
      <h3>{title}</h3>
      {hasSubtitle ? <p className="card-subtitle">{subtitle}</p> : null}
      <ul className="card-list">
        {items.map((item) => (
          <li key={renderItem(item).key}>{renderItem(item).node}</li>
        ))}
      </ul>
      {footer ? (
        footer.type === 'button' ? (
          <a className="card-footer-button" href={footer.href} target={footer.external ? '_blank' : undefined} rel={footer.external ? 'noreferrer' : undefined}>
            {footer.label}
          </a>
        ) : (
          <p className="card-footer-text">{footer.text}</p>
        )
      ) : null}
    </article>
  );
}