import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "../theme/theme";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Footer from "../components/Footer/footer";
import Blog from "../components/blog/blog";
import Skills from "../components/skills/skills";


const IndexPage = () => (
  <MuiThemeProvider theme={Theme}>
    <Layout>
      <div className="main">
        <SEO title="Home" />
        <Header />
        <section className="content-container">
          <Hero />
          <Blog />
          <Skills />
          <Footer />
        </section>
      </div>
    </Layout>
  </MuiThemeProvider>
);

export default IndexPage;
