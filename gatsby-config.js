module.exports = {
  siteMetadata: {
    title: `Kyle Butler`,
    siteUrl: `https://kylbutlr.com`,
    description: `Kyle Butler's Portfolio Website`,
    author: `@kylbutlr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kyle-butler-portfolio-website`,
        short_name: `kylbutlr`,
        start_url: `/`,
        background_color: `#e2c4b5`,
        theme_color: `#e2c4b5`,
        display: `minimal-ui`,
        icon: `static/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-preload-fonts`,
  ],
}
