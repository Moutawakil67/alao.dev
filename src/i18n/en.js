export default {
  nav: { about: 'About', projects: 'Projects', wordpress: 'WordPress', experience: 'Experience', contact: 'Contact' },
  hero: {
    status: 'Available for new opportunities',
    eyebrow: 'frontend developer · sèmè-podji, benin',
    name: 'ALAO BOURAIMA',
    role: 'I connect interfaces to complex systems',
    lead: 'Vue.js developer for 5 years — public administration, insurance, business platforms. From Figma mockup to production.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch'
  },
  about: {
    title: 'About',
    body: "Frontend developer for 5 years, specialized in Vue.js, I've supported public institutions and private companies in Benin in building business applications: government project management, insurance platforms, monitoring and evaluation tools. Graduate of a Bachelor's in Software Architecture (ESGIS Benin), I master the full frontend development cycle, from mockup to production, following Agile methodologies.",
    education: 'Education',
    edu1: "Bachelor's in Software Architecture — ESGIS Benin (2024–2025)",
    edu2: 'Industrial Computing and Maintenance — Institut CERCO (2016–2018)',
    languages: 'Languages',
    langNote: 'French C2 · Nago B2 · English B2'
  },
  skills: {
    title: 'Skills',
    groups: [
      { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Vue.js'] },
      { label: 'CSS frameworks', items: ['Bootstrap', 'Tailwind CSS'] },
      { label: 'Integration & APIs', items: ['REST API', 'Fetch API', 'Axios'] },
      { label: 'Tools', items: ['Git / GitHub', 'VS Code', 'Figma', 'Adobe XD'] },
      { label: 'Build', items: ['Webpack', 'Vite', 'NPM', 'Yarn'] },
      { label: 'Methodologies', items: ['Agile', 'Scrum', 'Design Thinking'] }
    ]
  },
  projects: {
    title: 'Projects',
    eyebrow: 'selected work',
    items: [
      {
        title: 'BIP — Integrated Project Management Platform',
        period: 'Aug 2025 – May 2026',
        client: 'Beninese State',
        context: 'The government needed a centralized application to manage all its public projects.',
        role: 'Design and development of the configuration workspace and dashboard.',
        stack: ['Vue.js']
      },
      {
        title: 'Digital Suggestion Box & Event Label',
        period: 'Jan – Jul 2025',
        client: 'Célérite Holding',
        context: 'Public event management platform and citizen suggestion system.',
        role: 'Built reusable Vue.js components, REST API integration, backend collaboration.',
        stack: ['Vue.js', 'REST API']
      },
      {
        title: 'Accountability Program',
        period: '2024',
        client: 'GFA Consulting',
        context: 'Monitoring and evaluation platform for a public accountability program.',
        role: 'Full cycle: Figma mockups, responsive HTML/CSS integration, API integration, testing, deployment.',
        stack: ['Vue.js', 'Tailwind CSS', 'JavaScript ES6+']
      },
      {
        title: 'Insurance Management Platform',
        period: '2023',
        client: 'BSI Insurance',
        context: 'A multinational insurance company needed a customer management platform.',
        role: 'UI/UX design, client interface, payment system integration, performance optimization.',
        stack: ['Vue.js', 'Bootstrap', 'REST API']
      },
      {
        title: 'Cotonou Stormwater Drainage Program',
        period: '2021',
        client: 'Government program',
        context: "Tracking Cotonou's stormwater drainage works.",
        role: 'Work-tracking interface, interactive mapping, dashboards.',
        stack: ['Vue.js', 'Leaflet.js', 'Chart.js']
      }
    ]
  },
  wordpress: {
    title: 'WordPress projects',
    eyebrow: 'showcase & e-commerce sites',
    intro: 'Alongside Vue.js development, I built and customized WordPress sites for various clients — institutional showcase sites and online stores.',
    items: [
      { name: 'SECUPRO', type: 'Showcase site', note: 'Theme customization, SEO optimization.', url: 'https://secuprogroup.com/' },
      { name: 'MINNAGAN (UAC)', type: 'Institutional site', note: 'Theme customization.', url: 'https://minnagan.com/' },
      { name: 'MARKETB AFRICA', type: 'Showcase site — insurance', note: 'Theme customization, SEO optimization.', url: 'https://maketb.africa/' },
      { name: 'Making Digi Prod', type: 'Showcase site', note: 'Theme customization.', url: 'https://makingdigiprod.com/' },
      { name: 'Factorial-T', type: 'Showcase site', note: 'Theme customization, SEO optimization.', url: 'https://factorial-t.com/' }
    ]
  },
  experience: {
    title: 'Experience',
    items: [
      { period: 'Aug 2025 – May 2026', org: 'BIP', role: 'Frontend Developer' },
      { period: 'Jan – Jul 2025', org: 'Célérite Holding', role: 'Frontend Developer' },
      { period: '2024', org: 'Making Digi Prod', role: 'Frontend Developer' },
      { period: '2024', org: 'GFA Consulting', role: 'Frontend Developer' },
      { period: '2023', org: 'BSI Insurance', role: 'Frontend Developer' },
      { period: '2022', org: 'Célérite Holding', role: 'Frontend Developer' },
      { period: '2021', org: 'Cotonou Stormwater Drainage Program', role: 'Frontend Developer' },
      { period: '2019 – 2025', org: 'Various clients / Célérite Holding', role: 'WordPress Developer' }
    ]
  },
  expertise: {
    title: 'Areas of expertise',
    items: [
      'Business applications for public administration',
      'REST API integration for complex management systems',
      'Responsive & mobile-first interfaces',
      'Interactive mapping & data visualization',
      'WordPress development (showcase & e-commerce)',
      'Full Figma → production workflow'
    ]
  },
  contact: {
    title: 'Contact',
    lead: "Available for freelance work or a frontend developer role. Let's talk about your project.",
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    phone: 'Phone'
  },
  footer: {
    rights: 'All rights reserved.'
  }
}
