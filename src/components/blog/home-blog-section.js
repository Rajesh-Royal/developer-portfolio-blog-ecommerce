import * as React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Typography, Container, Box, Grid, Divider, makeStyles, Card, CardActions, CardContent, CardActionArea, CardMedia, Chip } from "@material-ui/core";

const Blog = ({ data }) => {
    const useStyles = makeStyles((theme) => ({
        divider: {
            maxWidth: "150px",
            margin: "1rem auto"
        },
        card: {
            background: theme.palette.secondary.main,
            "& a": {
                textDecoration: "none",
            }
        },
        chip: {
            background: theme.palette.secondary.main,
            "& .MuiChip-root": {
                background: theme.palette.secondary.dark,
                color: theme.palette.text.primary
            }
        }
    }));
    const classes = useStyles();
    return (
        <StaticQuery
            query={graphql`
        query HeadingQuery {
            allWordpressPost (limit: 3){
                edges {
                node {
                    title
                    excerpt
                    x_featured_media_medium
                    date
                    slug
                }
                }
            }
        }
      `}
            render={data => (

                < section className="blog-section">
                    <Container maxWidth="lg">
                        <Box mt={8}>
                            <Grid spacing={3} container>
                                <Grid component="div" item sm={12}>
                                    <Typography variant="h4" color="textPrimary" align="center">
                                        Recent Blog
                                </Typography>
                                    <Divider variant="middle" className={classes.divider} />
                                </Grid>
                            </Grid>
                        </Box>
                        {/* ToDo: Use wordpress api to fetch blog dynamically */}
                        <Box my={4}>
                            <Grid spacing={3} container>
                                {data.allWordpressPost.edges.map(({ node }, index) => (
                                    <Grid item xs={12} sm={6} lg={4} key={index}>
                                        <Card className={classes.card}>
                                            <Link to={node.slug}>
                                                <CardActionArea bgcolor="primary">
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="180"
                                                        image={node.x_featured_media_medium}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h4" color="textPrimary"
                                                            dangerouslySetInnerHTML={{ __html: node.title.slice(0, 55) + "..." }}>

                                                        </Typography>
                                                        <Typography variant="body2" color="textPrimary" component="p"
                                                            dangerouslySetInnerHTML={{ __html: node.excerpt.slice(0, 140) }}>
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Link>
                                            <CardActions className={classes.chip}>
                                                <Chip size="small" label="First" />
                                                <Chip size="small" label="Second" />
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </section>
            )
            }
        />

    );
};
export default Blog;