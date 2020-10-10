const config = require("./src/data/config");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: config.url,
    title: "Developer portfolio, blog, ecommerce store built with gatsby",
    description: config.defaultDescription,
    author: config.author,
    rssMetadata: {
      site_url: config.url,
      feed_url: `${config.url}${config.siteRss}`,
      title: "Developer portfolio, blog, ecommerce store built with gatsby",
      description: config.defaultDescription,
      image_url: `${__dirname}/src/images/icon.png`,
      author: config.author,
      copyright: `${config.defaultTitle} © ${new Date().getFullYear()}`,
    },
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
        name: config.defaultTitle,
        short_name: config.defaultTitle,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: "src/images/icon.png",
        icons: [
          {
            src: "/favicons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/icon-512x512.png", // favicon path generateon build time
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: config.url,
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
      resolve: "gatsby-plugin-feed",
      options: {
        query: `{
					site {
						siteMetadata {
							rssMetadata {
								site_url
								title
								author
								copyright
								description
							}
						}
					}
				}`,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.excerpt,
                  url:
                    site.siteMetadata.rssMetadata.site_url +
                    edge.node.slug,
                  guid:
                    site.siteMetadata.rssMetadata.site_url +
                    edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.content }],
                  date: edge.node.date,
                  image: site.siteMetadata.rssMetadata.site_url + edge.node.featured_media.localFile.childImageSharp.fluid.src
                });
              });
            },
            query: `{
							allWordpressPost{
                edges {
                  node {
                      title
                      excerpt
                      date
                      slug
                      content
                      featured_media{
                        localFile{
                          childImageSharp{
                            fluid{
                              src
                            }
                          }
                        }
                      }
                  }
                }
            }
						}`,
            output: config.siteRss,
            title: config.defaultTitle,
          },
        ],
      },
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
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/images/icon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
