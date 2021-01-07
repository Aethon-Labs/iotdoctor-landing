module.exports = {
  siteMetadata: {
    title: `IoT Doctor`,
    description: `An Elegant and Flexible
    MQTT Dashboard`,
    author: `Luke Lopez, Aethon Labs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
          `source sans pro\:300,400,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },

    {
      resolve: `gatsby-plugin-autopilot`,
      options: {
        apiUrl: "https://turboeagle.co/anywhere/", // Your unique api URL, found in your tracking code settings in your Autopilot dashboard.
        trackingId:
          "0171b0d54bdc4946abc08690fb8dce891a0ee4fc585c4bb39cc1df5f14b1adbc", // Your unique tracking ID, also found in your tracking code settings.
        app: true, // Determines whether to load webpage or app tracking code.
      },
    },

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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/aethon-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
