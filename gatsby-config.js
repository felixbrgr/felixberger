module.exports = {
  siteMetadata: {
    title: `Felix Berger`,
    description: `Information on berlin based freelance frontend developer Felix Berger.`,
    author: `@mimhakkuh`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdowns`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felix Berger - Frontend Developer`,
        short_name: `Felix Berger`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        description: `Information on berlin based freelance frontend developer Felix Berger.`,
        lang: `en`,
        display: `standalone`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
