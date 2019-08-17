module.exports = {
  siteMetadata: {
    title: `Kyle Butler`,
    siteUrl: `https://kylbutlr.com`,
    description: `Kyle Butler's Portfolio Website`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-offline',
  ],
};
