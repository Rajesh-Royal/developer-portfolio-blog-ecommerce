import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "../theme/theme";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Footer from "../components/Footer/footer";
import Blog from "../components/blog/blog";


const IndexPage = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <div className="main">
        <SEO title="Home" />
        <Header />
        <section className="content-container">
          <Hero />
          <Blog />
          <Footer />
        </section>
      </div>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
