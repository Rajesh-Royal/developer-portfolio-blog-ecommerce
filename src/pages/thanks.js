import React, { useState } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

import Layout from "../components/global/layouts/layout";
import SEO from "../components/global/seo/seo";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import ThankYouImage from "../images/thankyou.gif";

const Thanks = () => {
    const [themeType, setThemeType] = useState("dark");
    const handleClick = () => {
        if (themeType === "dark") {
            setThemeType("light");
        } else {
            setThemeType("dark");
        }
    };

    const useStyles = makeStyles((theme) => ({
        link: {
            color: theme.palette.info.main
        }
    }));
    const classes = useStyles();
    return (
        <ThemeProvider theme={themeType == "dark" ? darkTheme : lightTheme}>
            <Layout>
                <div className="main">
                    <SEO title="Thank You" />
                    <Header handleClick={handleClick} themeType={themeType} />
                    <section className="content-container">
                        <Container maxWidth="lg">
                            <Grid container spacing={1}>
                                <Box my={7} width="100%">
                                    <Typography variant="body1" color="textPrimary" align="center">
                                        <h2>Thank You!</h2>
                                        <h2>Your email has been sent successfully</h2>
                                        <p>I will get back to you as soon as possible!</p>
                                        <Link to="/" className={classes.link}>Go Back Home</Link>
                                    </Typography>
                                </Box>
                                <Box my={7} width="100%">
                                    <Typography variant="body1" color="textPrimary" align="center">
                                        <img src={ThankYouImage} alt="thank you gif" />
                                    </Typography>
                                </Box>
                            </Grid>

                        </Container>
                    </section>
                    <Footer />
                </div>
            </Layout>
        </ThemeProvider>
    );
};

export default Thanks;
