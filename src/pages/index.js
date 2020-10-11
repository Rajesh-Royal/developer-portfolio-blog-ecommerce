import React, { useState } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Footer from "../components/Footer/footer";
import Blog from "../components/blog/home-blog-section";
import Skills from "../components/skills/skills";
import ClientReview from "../components/reviews/ClientReview";

import config from "../data/config";
import HomeThumbnail from "../images/default-opengraph-image.jpg";


const IndexPage = () => {
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
        <div className="main">
          <SEO title="Home" description={config.defaultDescription} image={HomeThumbnail} slug="" lang="en_US" type="Organization" />
          <Header handleClick={handleClick} themeType={themeType} />
          <section className="content-container">
            <Hero />
            <Blog />
            <Skills />
            <ClientReview />
            <Footer />
          </section>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
