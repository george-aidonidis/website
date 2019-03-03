module.exports = {
  siteTitle: 'George',
  siteDescription: `Hi there`,
  authorName: 'George Aidonidis',
  twitterUsername: 'geoaido',
  githubUsername: 'George-Aidonidis',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Software Developer 👨‍💻. Currently working as a frontend developer and in ❤️ with <strong>Javascript & React.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 70,
    },
    {
      name: 'CSS',
      level: 60,
    },
    {
      name: 'Javascript',
      level: 50,
    },
    {
      name: 'NodeJs',
      level: 40,
    },
    {
      name: 'React',
      level: 60,
    },
    {
      name: 'Git',
      level: 70,
    },
  ],
  jobs: [
    {
      company: 'Omilia LTD',
      begin: {
        month: 'Mar',
        year: '2019',
      },
      duration: null,
      occupation: 'Frontend Javascript Developer',
      description:
        'Writing React & JS frontend reusable components and web applications.',
    },
    {
      company: 'TheChatShop',
      begin: {
        month: 'apr',
        year: '2017',
      },
      duration: '1 year & 11 months',
      occupation: 'Fullstack Javascript Developer',
      description:
        'Development and maintenance, corrective and preventive, of web applications for the real estate market.',
    },
    {
      company: 'Ortec',
      begin: {
        month: 'feb',
        year: '2015',
      },
      duration: '2 years & 2 months',
      occupation: 'Software Engineer',
      description:
        'Started building Windows & Windows Phone applications eventually focused on Javascript mobile & web applications',
    },
    /* ... */
  ],
  social: {
    twitter: 'https://twitter.com/geoaido',
    linkedin: 'https://www.linkedin.com/in/georgeaidonidis',
    github: 'https://github.com/George-Aidonidis',
    email: 'george.aidonidis@gmail.com',
  },
  siteUrl: 'https://iamgeorge.dev',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: process.env.GOOGLE_ID,
  background_color: '#ffffff',
  theme_color: '#4B0082',
  display: 'minimal-ui',
  icon: 'src/assets/favico.png',
  headerLinks: [
    {
      label: 'George Aidonidis',
      url: '/',
    },
  ],
}
