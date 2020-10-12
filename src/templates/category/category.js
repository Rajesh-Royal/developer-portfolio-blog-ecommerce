// this page is template for single blog post

import React, { useState } from "react";
import { graphql } from "gatsby";
import { lightTheme, darkTheme } from "../../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../../components/global/layouts/layout";
import SEO from "../../components/global/seo/seo";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SingleCategory from "./single-category";

import DefaultCategoryImage from "../../images/default-opengraph-image.jpg";

const Category = ({ data, pageContext, location }) => {
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
        <SEO
          title={pageContext.name}
          description={`category ${pageContext.name} posts`}
          image={DefaultCategoryImage}
          slug={pageContext.slug} lang="en_US"
          type="Organization"
        />
        <Header handleClick={handleClick} themeType={themeType} />
        <div className="main">
          <section className="content-container">
            <SingleCategory data={data} pageContext={pageContext} />
            <Footer />
          </section>
        </div>

      </Layout>
    </ThemeProvider>
  );
};

export const query = graphql`
  query($id: String!) {
    allWordpressPost(filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
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
          x_featured_media_medium
          featured_media{
            localFile{
              childImageSharp{
                fixed(height: 200) {
                 ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }`;

export default Category;
