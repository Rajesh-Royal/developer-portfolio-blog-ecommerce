import React from "react";
import { Container, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "gatsby";

import RajeshImage from "../../images/rajesh-royal-vector-illustrator.png";

const Hero = () => {
    const useStyles = makeStyles((theme) => ({
        title: {
            fontSize: "3.8rem",
            lineHeight: "1.3em",
            textShadow: `1px 1px 2px ${theme.palette.text.primary}`,
        },
        subTitle: {
            marginTop: theme.spacing(2)
        },
        image: {
            marginTop: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    return (
        <section className="Hero-section">
            <Container maxWidth="lg">
                <Box my={6}>
                    <Grid spacing={3} container>
                        <Grid component="div" item sm={12}>
                            <Typography variant="h4" color="textPrimary" align="center" className={classes.title}>
                                Hi there, 👋 My Name is Rajesh. Frontend-Engineer from India😉.
                            </Typography>
                            <Typography variant="h6" color="textPrimary" align="center" className={classes.subTitle}>
                                I design and code beautifully simple things, and I love what I do.
                            </Typography>
                            <Typography align="center" className={classes.image}>
                                <img width="250" src={RajeshImage} alt="Rajesh royal vector illustrator" />
                            </Typography>
                            <Link to="/contact" target="_blank">
                                <Typography variant="button" color="textPrimary" align="center" className={classes.button}>
                                    <Box mt={3}>
                                        <Button variant="contained" color="primary" size="large">
                                            Say Hello 👋
                                    </Button>
                                    </Box>
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section >
    );
};

export default Hero;