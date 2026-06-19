export const portfolioData = {
  dockItems: [
    { label: 'home', icon: 'House', href: '#home' },
    { label: 'about', icon: 'User', href: '#home' },
    { label: 'projects', icon: 'LayoutGrid', href: '#projects' },
    { label: 'contact', icon: 'Mail', href: '#contact' },
    { label: 'github', icon: 'Github', href: 'https://github.com/Thiagosdcavalcante', external: true },
    { label: 'linkedin', icon: 'Linkedin', href: 'https://linkedin.com/in/thiagosdcavalcante', external: true },
  ],
  hero: {
    label: 'THIAGO SANTANA DANTAS CAVALCANTE',
    titlePrefix: 'Full Stack ',
    titleHighlight: 'Developer.',
    description:
      'Full Stack Developer, building efficient and scalable end-to-end applications with React, JavaScript, Python, C, C++, Dart (Flutter), MySQL, Docker, and Linux.',
  },
  expertise: {
    title: 'Expertise',
    subtitle: null,
    items: [
      {
        title: 'Languages and Frameworks',
        description: 'React, JavaScript, CSS, Python, C, C++, Dart (Flutter), Haxe',
      },
      {
        title: 'Databases',
        description: 'MySQL and SQL',
      },
      {
        title: 'Tools',
        description: 'Docker, Git, GitHub, Linux, Shell Script',
      },
      {
        title: 'Practices',
        description: 'TDD, Agile, Kanban, Mob Programming',
      },
    ],
    footer: {
      type: 'text',
      text: 'Focused on efficient and scalable solutions.',
    },
  },
  projects: {
    title: 'GitHub Projects',
    subtitle: null,
    items: [
      {
        title: 'transcendence',
        name: 'transcendence',
        href: 'https://github.com/Thiagosdcavalcante/transcendence',
        description: 'A game with the theme Migratory Birds.',
      },
      {
        title: 'inception',
        name: 'inception',
        href: 'https://github.com/Thiagosdcavalcante/inception',
        description: '42 project focused on infrastructure and containers.',
      },
      {
        title: 'CPP',
        name: 'CPP',
        href: 'https://github.com/Thiagosdcavalcante/CPP',
        description: 'An introduction to C++ and object orientation.',
      },
      {
        title: 'minishell',
        name: 'minishell',
        href: 'https://github.com/Thiagosdcavalcante/minishell',
        description: 'A simple shell implemented in C.',
      },
    ],
  },
  footer: {
    copy: 'All rights reserved to Thiago Santana Dantas Cavalcante - Get in touch for more information.',
  },
};