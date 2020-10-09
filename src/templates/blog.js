// this page is template for single blog post

import React, { useState } from "react";
import { graphql } from "gatsby";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import SingleBlog from "./single-blog";

const blog = ({ data, pageContext, location }) => {
  const post = data.allWordpressPost.edges[0].node;
  const [themeType, setThemeType] = useState("dark");
  const handleClick = () => {
    if (themeType === "dark") {
      setThemeType("light");
    } else {
      setThemeType("dark");
    }
  };
  return (
    <ThemeProvider theme={themeType == "dark" ? darkTheme : lightTheme}>
      <Layout>
        <SEO title={post.title} />
        <Header handleClick={handleClick} themeType={themeType} />
        <div className="main">
          <section className="content-container">
            <SingleBlog post={post} pageContext={pageContext} />
            <Footer />
          </section>
        </div>

      </Layout>
    </ThemeProvider>
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

          featured_media{
          source_url
          localFile {
               publicURL
               childImageSharp {
               fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }`;

export default blog;
