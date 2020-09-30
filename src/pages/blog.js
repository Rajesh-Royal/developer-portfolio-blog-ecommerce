import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "../theme/theme";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const blog = () => {

  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Blog" />
        <Header />
        <div className="main">
          <section className="content-container">
            <h2>Blog Page</h2>
            <Footer />
          </section>
        </div>

      </Layout>
    </ThemeProvider>
  );
};

export default blog;
