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
                <div className="main">
                    <SEO title="Home" />
                    <Header />
                    <section className="content-container"></section>
                    <Footer />
                </div>
            </Layout>
        </ThemeProvider>
    );
};

export default blog;
