import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import YoutubeIcon from "@material-ui/icons/YouTube";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import RedditIcon from "@material-ui/icons/Reddit";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkIcon from "@material-ui/icons/Link";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import config from "../../data/config";


const About = () => {
    const useStyles = makeStyles((theme) => ({
        link: {
            color: theme.palette.info.main
        },
        p: {
            fontSize: 20,
            lineHeight: 1.6,
            marginBottom: theme.spacing(3)
        },
        heading: {
            fontWeight: 500
        },
        contact: {
            "& li": {
                marginBottom: theme.spacing(3),
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                "& span": {
                    marginLeft: theme.spacing(2)
                }
            }
        },
        socialLinks: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: theme.spacing(3),
            "& a": {
                color: theme.palette.text.primary,
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                marginRight: theme.spacing(6),
                marginTop: theme.spacing(2),
                "& span": {
                    marginLeft: theme.spacing(1)
                },
                "& svg": {
                    height: "2rem",
                    width: "2rem"
                }
            }
        }
    }));
    const classes = useStyles();
    const query = graphql`{
        allImageSharp(filter: {original: {src: {regex: "/rajesh-royal-pc/"}}}) {
          edges {
            node {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }`;
    const rajeshImage = useStaticQuery(query);
    return (
        <Container maxWidth="lg">
            <Box mt={7} mb={3} width="100%">
                <Box mt={3} mb={3} width="100%">
                    <Grid item >
                        <Typography variant="h2" color="textPrimary" align="left" className={classes.heading}>
                            About Me
                                    </Typography>
                    </Grid>
                </Box>
                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12}>
                        <Typography variant="body1" color="textPrimary" align="left" className={classes.p}>
                            I’m Rajesh, I’m a self-taught Graphic, UI/UX Designer and Frontend developer. I'm really interested in Technology & solving technical problems. You can know more about me by reading my <Link to="/blog" className={classes.link}>articles.</Link>
                        </Typography>
                        <Typography variant="body1" color="textPrimary" align="left" className={classes.p}>
                            I enjoy building new things, contributing to the open-source community, and continuously learning. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                                    </Typography>
                        <Typography variant="body1" color="textPrimary" align="left" className={classes.p}>
                            Currently I'm working full time as a software engineer Intern at
                                        <a href="https://betatestsolutions.com" target="_blank" referrerPolicy="norefer"
                                className={classes.link}> BETATEST SOLUTIONS</a>.
                                    </Typography>
                        <Typography variant="body1" color="textPrimary" align="left" className={classes.p}>
                            For business inquiries feel free to get in touch with me at:
                                    </Typography>
                        <Typography variant="body1" component="div" color="textPrimary" align="left" className={classes.p}>
                            <ul className={classes.contact}>
                                <li><EmailIcon /> <span>{config.contact.email}</span> </li>

                                <li><PhoneIcon /> <span>{config.contact.phone}</span> </li>

                                <li><LocationOnIcon /> <span>{`${config.address.region}, ${config.address.city}, ${config.address.zipCode}, ${config.address.country}`}</span> </li>

                                <li><LocationOnIcon /> <span>Somewhere in Ajmer, India</span> </li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <Img fluid={rajeshImage.allImageSharp.edges[0].node.fluid} />
                        <Typography variant="body1" color="initial">
                            <a href="https://instagram.com/rajesh.royal" target="_blank" referrerPolicy="norefer"
                                className={classes.link}>
                                View More on Instagram
                                            </a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item >
                    <Typography variant="h4" color="textPrimary" align="left" className={classes.heading}
                        style={{ marginTop: 20 }}>
                        Or somewhere else on the web
                                    </Typography>
                    <Typography variant="body1" component="div" color="textPrimary" align="left" className={classes.p}>
                        <div className={classes.socialLinks}>
                            <a target="_blank" href={config.socialLinks.twitter} referrerPolicy="norefer">
                                <TwitterIcon /> <span> Twitter</span>
                            </a>
                            <a target="_blank" href={config.socialLinks.youtube} referrerPolicy="norefer">
                                <YoutubeIcon />
                                <span> YouTube</span>
                            </a>
                            <a target="_blank" href={config.socialLinks.github} referrerPolicy="norefer">
                                <GithubIcon />
                                <span> Github</span>
                            </a>
                            <a target="_blank" href={config.socialLinks.linkedin} referrerPolicy="norefer">
                                <LinkedinIcon />
                                <span> Linkedin</span>
                            </a>
                            <a target="_blank" href={config.socialLinks.instagram} referrerPolicy="norefer">
                                <InstagramIcon />
                                <span> Instagram</span>
                            </a>
                            <a target="_blank" href={config.socialLinks.facebook} referrerPolicy="norefer">
                                <FacebookIcon />
                                <span> Facebook</span>
                            </a>
                            <a target="_blank" href={config.socialLinks.reddit} referrerPolicy="norefer">
                                <RedditIcon />
                                <span> Reddit</span>
                            </a>
                            <a target="_blank" href={config.socialLinks.devBlog} referrerPolicy="norefer">
                                <LinkIcon />
                                <span> Dev Blog</span>
                            </a>
                        </div>
                    </Typography>
                </Grid>
            </Box>

        </Container>
    );
};

export default About;
