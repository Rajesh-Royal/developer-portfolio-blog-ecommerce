import React, { useState } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import ContactForm from "../components/contact/ContactForm";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

import ContactPageThumbnail from "../images/contact-page.jpg";

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
                    <SEO
                        title="Contact"
                        description="Contact Rajesh Royal, contact via email or submit this form and I will get back to you as soon as possible"
                        image={ContactPageThumbnail}
                        slug="contact" lang="en_US"
                        type="Organization"
                    />
                    <Header handleClick={handleClick} themeType={themeType} />
                    <section className="content-container">
                        <ContactForm />
                    </section>
                    <Footer />
                </div>
            </Layout>
        </ThemeProvider>
    );
};

export default contact;
