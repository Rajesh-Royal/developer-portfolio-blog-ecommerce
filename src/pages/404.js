import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import SEO from "../components/global/seo/seo";

const Page404 = () => {
    return (
        <Container maxWidth="lg">
            <SEO
                title="404"
                description="page not found"
                image=""
                slug="404" lang="en_US"
                type="Organization"
            />
            <Box my={8} width="100%">
                <Typography variant="h1" color="textPrimary" align="center">
                    404 page Not found
            </Typography>
                <Typography variant="body" color="textPrimary" component="p" align="center">
                    <Link to="/">Return To Home</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Page404;
