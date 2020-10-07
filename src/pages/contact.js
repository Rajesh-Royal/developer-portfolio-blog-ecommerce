import React, { useState } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const contact = () => {
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
                    <SEO title="Contact" />
                    <Header handleClick={handleClick} themeType={themeType} />
                    <section className="content-container"></section>
                    <Footer />
                </div>
            </Layout>
        </ThemeProvider>
    );
};

export default contact;
