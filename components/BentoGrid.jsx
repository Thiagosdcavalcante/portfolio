import React from 'react';

import { CarrosselInterativo } from './CarrosselInterativo.jsx';

export function BentoGrid({ content }) {
  return (
    <section id="projects" className="bento-grid">
      <CarrosselInterativo
        className="expertise-box"
        title={content.expertise.title}
        subtitle={content.expertise.subtitle}
        items={content.expertise.items}
        renderItem={(item) => ({
          key: item.title,
          node: (
            <div className="card-entry">
              <span className="card-entry-title">{item.title}</span>
              <span className="card-entry-description">{item.description}</span>
            </div>
          ),
        })}
        footer={{ type: 'text', text: content.expertise.footer.text }}
      />

      <CarrosselInterativo
        className="projects-box"
        title={content.projects.title}
        subtitle={content.projects.subtitle}
        items={content.projects.items}
        renderItem={(project) => ({
          key: project.title,
          node: (
            <a href={project.href} target="_blank" rel="noreferrer">
              <span className="card-entry-title">{project.title}</span>
              <span className="card-entry-description">{project.description}</span>
            </a>
          ),
        })}
      />
    </section>
  );
}