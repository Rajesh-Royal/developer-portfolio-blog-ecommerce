import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import Img from "gatsby-image";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import BlogPage from "../components/blog/blog-page";
import PostPagination from "../components/blog/pagination";

import BlogPageThumbnail from "../images/blog-page.jpg";
import config from "../data/config";

const blog = (props) => {
  const [themeType, setThemeType] = useState("dark");
  const handleClick = () => {
    if (themeType === "dark") {
      setThemeType("light");
    } else {
      setThemeType("dark");
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = props.data.allWordpressPost.edges;
      setPosts(res);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <ThemeProvider theme={themeType == "dark" ? darkTheme : lightTheme}>
      <Layout>
        <SEO
          title="Blog"
          description={config.aboutMe}
          image={BlogPageThumbnail}
          slug="blog" lang="en_US"
          type="Organization"
        />
        <Header handleClick={handleClick} themeType={themeType} />
        <div className="main">
          <section className="content-container">
            <BlogPage posts={currentPosts} loading={loading} />
            <Container maxWidth="lg">
              <Box mt={8}>
                <Box my={4}>
                  <PostPagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                  />
                </Box>
              </Box>
            </Container>
            <Footer />
          </section>
        </div>

      </Layout>
    </ThemeProvider>
  );
};

export const postPageQuery = graphql`
  query{
    allWordpressPost{
        edges {
        node {
            title
            excerpt
            x_featured_media_medium
            date
            slug
            categories{
              name
              slug
            }
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
  }
`;

export default blog;
