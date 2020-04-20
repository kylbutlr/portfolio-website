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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
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
        icon: `static/android-chrome-512x512.png`,
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
