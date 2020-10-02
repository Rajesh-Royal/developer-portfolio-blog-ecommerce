import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./templates.module.css";

export const SingleBlog = ({ post }) => {
    const useStyles = makeStyles((theme) => ({
        featured: {
            width: "100%"
        },
        title: {

        },
        date: {

        },
        prefix: {
            color: theme.palette.text.primary
        },
        avatar: {
            borderRadius: "50%",
            border: `1px solid ${theme.palette.primary.main}`,
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(-1)
        },
        body: {
            marginTop: theme.spacing(6),
            color: theme.palette.text.primary,
            "& a": {
                color: theme.palette.info.main,
                textDecoration: "none"
            },
            "& p, h4, ul": {
                fontSize: 18,
                fontWeight: "normal"
            },
            "& h3": {
                fontSize: 22
            },
            "& li": {
                fontSize: 16,
                lineHeight: 1.8
            },
            "& code, em": {
                fontSize: 14,
                color: theme.palette.text.primary,
                background: theme.palette.secondary.main,
                padding: `2px ${theme.spacing(0.8)}px`,
                borderRadius: theme.spacing(0.5)
            },
            "& blockquote": {
                background: theme.palette.secondary.main,
                padding: theme.spacing(1),
                maxWidth: "fit-content",
                borderLeft: `2px solid ${theme.palette.info.main}`,
                "& p": {
                    margin: theme.spacing(0),
                    minWidth: "fit-content",
                }
            },
            "& img": {
                maxWidth: 768,
                height: "auto",
                width: "100% !important"
            }
        }
    }));
    const classes = useStyles();
    return (
        <article className="blog-article">
            <Container maxWidth="md">
                <Box my={6}>
                    <Grid spacing={3} container>
                        <Grid component="div" item sm={12}>
                            <img src={post.featured_media.localFile.url} className={classes.featured} alt="post-featured-media" srcSet="" />
                            <Typography variant="h2" color="textPrimary" dangerouslySetInnerHTML={{ __html: post.title }}>
                            </Typography>
                            <Typography variant="body1" component="div" color="primary">

                                <p>
                                    <span className={classes.prefix}>
                                        <img width="30px" src={post.author.avatar_urls.wordpress_24} className={classes.avatar} alt="author-avatar" srcSet="" />
                                    </span>
                                    {post.author.name.toUpperCase()}, {post.date}
                                </p>

                            </Typography>
                            <Typography variant="body2" component="div" color="initial" className={classes.body} dangerouslySetInnerHTML={{ __html: post.content }}>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </article>
    );
};
export default SingleBlog;
