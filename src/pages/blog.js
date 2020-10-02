import React, { useState } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { Typography } from "@material-ui/core";

const blog = () => {
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
        <SEO title="Blog" />
        <Header handleClick={handleClick} themeType={themeType} />
        <div className="main">
          <section className="content-container">
            <Typography variant="h2" color="textPrimary">
              Blog Page
            </Typography>
            <Footer />
          </section>
        </div>

      </Layout>
    </ThemeProvider>
  );
};

export default blog;
