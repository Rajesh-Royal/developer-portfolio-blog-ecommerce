import React from "react";
import { Box, Container, Grid, Typography, makeStyles } from "@material-ui/core";
import TestimonialSlider from "./TestimonialSlider";

const ClientReview = () => {
    const useStyles = makeStyles((theme) => ({
        title: {

        },
        subtitle: {
            marginTop: theme.spacing(2)
        }
    }));
    const classes = useStyles();
    return (
        <div className="testimonial-container">
            <Container maxWidth="lg">
                <Box mt={8}>
                    <Typography variant="h4" color="textPrimary" align="center" className={classes.title}>
                        Testimonials
                </Typography>
                    <Typography variant="body2" color="textPrimary" align="center" className={classes.subtitle}>
                        People I've worked with have said some nice things about me
                </Typography>
                </Box>
                <Box mb={8} mt={1}>
                    <Grid container spacing={3}>
                        <TestimonialSlider />
                    </Grid>
                </Box>

            </Container>
        </div>
    );
};

export default ClientReview;