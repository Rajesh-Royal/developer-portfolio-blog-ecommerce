const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allWordpressPost(sort: {fields: [date]}) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "MM-DD-YYYY")
            content
            slug
            author {
              name
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }

  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }, index) => {
      createPage({
        // Decide URL structure
        path: node.slug,
        // path to template
        component: path.resolve("./src/templates/blog.js"),
        context: {
          slug: node.slug,
          $slug: node.slug,
          prev: index === 0 ? null : result.data.allWordpressPost.edges[index - 1].node,
          next: index === (result.data.allWordpressPost.edges.length - 1) ? null : result.data.allWordpressPost.edges[index + 1].node
        },
      });
    });
  });
};