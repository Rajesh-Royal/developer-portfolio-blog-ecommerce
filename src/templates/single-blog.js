import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import parse from "html-react-parser";
import { PostImage } from "../components/WP-image-optimize/PostImage";
import Img from "gatsby-image";
import { Link } from "gatsby";

import "./templates.module.css";

export const SingleBlog = ({ post, pageContext }) => {
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
            },
        },
        navigation: {
            display: "flex",
            justifyContent: "space-between",
            marginTop: theme.spacing(8),
            fontSize: 20,
            "& a": {
                color: theme.palette.info.main,
                textDecoration: "none"
            },
        }
    }));
    const classes = useStyles();
    const getImage = node => {
        if (node.name === "img") {
            return node;
        } else if (node.children != null) {
            for (let index = 0; index < node.children.length; index++) {
                let image = getImage(node.children[index]);
                if (image != null) return image;
            }
        }
    };

    const replaceMedia = node => {
        if (node.name === "p") {
            const image = getImage(node);
            if (image != null) {
                return <PostImage src={image.attribs.src} alt={image.attribs.alt} width={image.attribs.width} />;
            }
        }
    };


    return (
        <article className="blog-article">
            <Container maxWidth="md">
                <Box my={6}>
                    <Grid spacing={3} container>
                        <Grid component="div" item sm={12}>
                            {/* using gatsby optimized image */}
                            <Img
                                fluid={post.featured_media.localFile.childImageSharp.fluid}
                                alt="post-featured-media"
                                className={classes.featured}
                            />
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
                            <Typography variant="body2" component="div" color="initial" className={classes.body}>
                                {/* optimizing all the images inside post body with gatsby transformer */}
                                {parse(post.content, { replace: replaceMedia })}
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.navigation} align="right">
                                {pageContext.prev ?
                                    <Link to={`/${pageContext.prev.slug}`}> {"<"} PrevPost </Link> : ""
                                }
                                {pageContext.next ?
                                    <Link to={`/${pageContext.next.slug}`}> NextPost {">"} </Link> : ""
                                }

                            </Typography>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </article>
    );
};
export default SingleBlog;
