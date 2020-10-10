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
        name: "Rajesh Royal",
        short_name: "Rajesh",
        start_url: "/",
        background_color: "#2b3e50",
        theme_color: "#2b3e50",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        theme_color_in_head: false,
        cache_busting_mode: "none"
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-path*"]
        }
      }
    },
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/data/`,
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
