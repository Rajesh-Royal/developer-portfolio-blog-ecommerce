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
import parse from "html-react-parser";

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
  const parsedDescription = parse(post.excerpt);
  return (
    <ThemeProvider theme={themeType == "dark" ? darkTheme : lightTheme}>
      <Layout>
        <SEO
          title={post.title}
          description={parsedDescription[0].props.children}
          image={post.featured_media.localFile.childImageSharp.fluid.src}
          slug={post.slug} lang="en_US"
          type="NewsArticle"
          articleBody={post.content}
          datePublished={post.date}
          dateModified={post.date}
        />
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
          excerpt
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
