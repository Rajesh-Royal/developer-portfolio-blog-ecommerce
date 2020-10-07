module.exports = {
  siteMetadata: {
    title: "Developer portfolio, blog, ecommerce store built with gatsby",
    description: "Kick off Developer portfolio, blog, ecommerce store built with gatsby along with @material-ui, strapi, react-helmet. Hosted on netlify",
    author: "@Rajesh-Royal",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // Specify the URL of the WordPress source
        baseUrl: "rajeshroyal.com",
        protocol: "https",
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        useACF: false,
        // Specify which URL structures to fetch
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ]
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: "tomato",
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
};
