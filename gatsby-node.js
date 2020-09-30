const path = require("path");

exports.createPages = ({ graphql, actions }) => {
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
            author {
              name
            }
          }
        }
      }
    }

  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        path: node.slug,
        // path to template
        component: path.resolve("./src/pages/blog.js"),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      });
    });
  });
};