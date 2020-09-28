import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Typography, Container, Box, Grid, Divider, makeStyles, Card, CardActions, CardContent, Button, CardActionArea, CardMedia, Chip, Paper } from "@material-ui/core";

const Blog = ({ data }) => {
    const useStyles = makeStyles((theme) => ({
        divider: {
            maxWidth: "150px",
            margin: "1rem auto"
        },
        card: {
            background: theme.palette.secondary.main
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
            allWordpressPost (limit: 6){
                edges {
                node {
                    title
                    excerpt
                    x_featured_media_medium
                    date
                }
                }
            }
        }
      `}
            render={data => (

                < section className="blog-section">
                    <Container maxWidth="lg">
                        <Box my={8}>
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
                                            <CardActionArea bgcolor="primary">
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="180"
                                                    image={node.x_featured_media_medium}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h4" color="textPrimary">
                                                        Lizard
                                            </Typography>
                                                    <Typography variant="body2" color="textPrimary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                        </Typography>
                                                </CardContent>
                                            </CardActionArea>
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
// export const query = graphql`
//   query BlogQuery {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `;
export default Blog;