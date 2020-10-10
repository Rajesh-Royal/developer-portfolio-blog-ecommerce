import React, { useState } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import About from "../components/about/about";
import Footer from "../components/Footer/footer";

import config from "../data/config";
import AboutMePageThumbnail from "../images/rajesh-royal-pc.jpg";



const about = () => {
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
                    <SEO
                        title="About Me"
                        description={config.aboutMe}
                        image={AboutMePageThumbnail}
                        slug="about" lang="en_US"
                        type="Organization"
                    />
                    <Header handleClick={handleClick} themeType={themeType} />
                    <section className="content-container">
                        <About />
                    </section>
                    <Footer />
                </div>
            </Layout>
        </ThemeProvider>
    );
};

export default about;
