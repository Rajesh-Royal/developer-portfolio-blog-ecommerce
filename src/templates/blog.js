import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import SingleBlog from "./single-blog";

const blog = ({ data }) => {
  const post = data.allWordpressPost.edges[0].node;
  return (
    <Layout>
      <SEO title={post.title} />
      <Header />
      <div className="main">
        <section className="content-container">
          <SingleBlog post={post} />
          <Footer />
        </section>
      </div>

    </Layout>

  );
};

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "LL")
          author {
            name
            avatar_urls {
                wordpress_24
            }
          }
          featured_media {
            localFile {
                url
            }
          }
        }
      }
    }
  }`;

export default blog;
