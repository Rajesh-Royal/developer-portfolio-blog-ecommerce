import React from "react";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Footer from "../components/Footer/footer";
import Blog from "../components/blog/blog";
import Skills from "../components/skills/skills";


const IndexPage = () => (
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
);

export default IndexPage;
