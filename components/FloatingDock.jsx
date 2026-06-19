import React from 'react';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconLayoutGrid,
  IconMail,
  IconUser,
} from '@tabler/icons-react';

const iconMap = {
  House: IconHome,
  User: IconUser,
  LayoutGrid: IconLayoutGrid,
  Mail: IconMail,
  Github: IconBrandGithub,
  Linkedin: IconBrandLinkedin,
};

export function FloatingDock({ items }) {
  return (
    <div className="dock-container" aria-label="Dock de navegação">
      <div className="dock">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon];
          const className = index === 0 ? 'dock-item active' : 'dock-item';
          const content = (
            <>
              <span className="dock-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={2} />
              </span>
              <span className="dock-label">{item.label}</span>
            </>
          );

          return item.external ? (
            <a key={item.label} href={item.href} className={className} target="_blank" rel="noreferrer" aria-label={item.label}>
              {content}
            </a>
          ) : (
            <a key={item.label} href={item.href} className={className} aria-label={item.label}>
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}