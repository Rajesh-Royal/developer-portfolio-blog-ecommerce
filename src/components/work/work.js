import * as React from "react";
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby";
import { Typography, Container, Box, Grid, Divider, makeStyles, Card, CardActions, CardContent, CardActionArea, CardMedia, Chip, Button } from "@material-ui/core";
import Img from "gatsby-image";

const Work = () => {
    const useStyles = makeStyles((theme) => ({
        divider: {
            maxWidth: "150px",
            margin: "1rem auto"
        },
        subtitle: {
            marginTop: theme.spacing(2)
        },
        card: {
            background: theme.palette.secondary.main,
            transition: "all 0.5s",
            "& a": {
                textDecoration: "none",
            },
            "& .gatsby-image-wrapper": {
                width: "100% !important"
            },
            "&:hover .project-content": {
                opacity: 1,
                transform: "scale(1)",
            }
        },
        cardContent: {
            opacity: 0,
            transform: "scale(0.9)",
            transformOrigin: "left center",
            transition: "all 0.3s",
            position: "absolute",
            zIndex: 10000000,
            top: 0,
            left: 0,
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            "& p": {
                fontSize: "0.9rem",
                lineHeight: 1.8
            }
        },
        upworkButton: {
            color: theme.palette.text.primary,
            textDecoration: "none",
            transition: "all 0.3s",
            opacity: 0.8,
            "&:hover": {
                fontSize: "1rem"
            }
        }
    }));
    const classes = useStyles();
    const data = useStaticQuery(graphql`
        query WorkProjectQuery {
            allProjectWorkYaml (limit: 3){
                edges {
                node {
                    title
                    excerpt
                    slug
                    thumbnail{
                      childImageSharp{
                        fixed(height: 200) {
                         ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
                }
            }
        }
      `);
    return (
        < section className="blog-section">
            <Container maxWidth="lg">
                <Box mt={12}>
                    <Grid spacing={3} container>
                        <Grid component="div" item sm={12}>
                            <Typography variant="h4" color="textPrimary" align="center">
                                My Recent Work
                                </Typography>
                            <Typography variant="body2" color="textPrimary" align="center" component="p"
                                className={classes.subtitle}>
                                Here are a few Development projects I've worked on recently.
                                </Typography>
                            <Divider variant="middle" className={classes.divider} />
                        </Grid>
                    </Grid>
                </Box>
                {/* ToDo: Use wordpress api to fetch blog dynamically */}
                <Box my={2}>
                    <Grid spacing={3} container>
                        {data.allProjectWorkYaml.edges.map(({ node }, index) => (

                            <Grid item xs={12} sm={6} lg={4} key={index}>
                                <Card className={classes.card}>
                                    <a href={node.slug} target="_blank">
                                        <CardActionArea bgcolor="primary">
                                            <CardMedia
                                                component="div"
                                                height="180"
                                            >
                                                <Img fixed={node.thumbnail.childImageSharp.fixed}
                                                    alt="blog post thumbnail image" />
                                            </CardMedia>
                                            <CardContent className={`${classes.cardContent} project-content`}>
                                                <Typography gutterBottom variant="h5" component="h4" color="textPrimary"
                                                    dangerouslySetInnerHTML={{ __html: node.title.slice(0, 55) + "..." }} />

                                                <Typography variant="body2" color="textPrimary" component="p"
                                                    dangerouslySetInnerHTML={{ __html: node.excerpt.slice(0, 140) }} />

                                            </CardContent>
                                        </CardActionArea>
                                    </a>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box mt={5}>

                        <Typography variant="body1" color="textPrimary" align="center" className="upwork-button">
                            <a href="https://www.upwork.com/freelancers/~01e16cc076dd7d6559" target="_blank" className={classes.upworkButton}>
                                View more on upwork
                                </a>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};
export default Work;