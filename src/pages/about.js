import React from "react";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const about = () => {
    return (
        <Layout>
            <div className="main">
                <SEO title="Home" />
                <Header />
                <section className="content-container"></section>
                <Footer />
            </div>
        </Layout>
    );
};

export default about;
