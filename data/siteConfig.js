module.exports = {
  siteTitle: 'George',
  siteDescription: `Hi there`,
  authorName: 'George Aidonidis',
  twitterUsername: 'geoaido',
  githubUsername: 'George-Aidonidis',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Software Developer 👨‍💻. Currently working as a frontend developer and in ❤️ with <strong>Javascript & React.</strong>
        Occasionally drafting random thoughts at
        <a href="https://dunno.tech">dunno.tech</a>
	`,
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
      company: 'Toptal',
      begin: {
        month: 'Dec',
        year: '2019',
      },
      duration: null,
      occupation: 'Senior Frontend Engineer',
      description: `Extracting small web components to be used by Toptal's main platform.`,
    },
    {
      company: 'Omilia LTD',
      begin: {
        month: 'Mar',
        year: '2019',
      },
      duration: '8 months',
      occupation: 'Senior Frontend Engineer',
      description:
        'Developed React & JS frontend reusable components and web applications.',
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
        'Development and maintenance of web applications for the chat industry.',
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
        'Started building Windows & Windows Phone applications eventually focused on Javascript mobile & web applications.',
    },
    {
      company: 'OTE',
      begin: {
        month: 'Mar',
        year: '2014',
      },
      duration: '6 months',
      occupation: 'Lab Assistant',
      description:
        'Developed a product management application to automate shipping/maintaining procedures for company’s networking products.',
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
