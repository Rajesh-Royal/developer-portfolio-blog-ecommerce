import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkIcon from "@material-ui/icons/Link";

import config from "../../data/config";

import FooterLogo from "../../images/icon.png";
import GatsbyLogo from "../../images/gatsby-logo.svg";

const FooterWidgets = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            background: theme.palette.info.light,
        },
        container: {
            color: "rgba(255,255,255,0.55)",
            "& .info-text": {
                fontSize: 22
            },
            "& .made-with": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& img": {
                    marginLeft: 10,
                    cursor: "pointer"
                }
            }
        },
        socialLinks: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: `${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(5)}px`,
            "& a": {
                color: "whitesmoke",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                marginRight: theme.spacing(6),
                marginTop: theme.spacing(2),
                transition: "all 0.5s",
                "&:hover": {
                    color: "#2b3e50",
                    "& svg": {
                        background: "whitesmoke"
                    }
                },
                "& svg": {
                    border: "2px solid rgba(255,255,255,0.55)",
                    borderRadius: "50%",
                    padding: "8px",
                    height: "2rem",
                    width: "2rem"
                }
            }
        }
    }));
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container maxWidth="lg">
                <Box pb={5} pt={18} width="100%">
                    <Typography variant="body1" align="center" component="div" className={classes.container}>
                        <img src={FooterLogo} alt="footer-logo-icon" width="100" />
                        <p className="info-text">Living, learning, & leveling up <br />one day at a time.</p>
                        <div className={classes.socialLinks}>
                            <a target="_blank" href={config.socialLinks.twitter} referrerPolicy="norefer">
                                <TwitterIcon />
                            </a>

                            <a target="_blank" href={config.socialLinks.github} referrerPolicy="norefer">
                                <GithubIcon />
                            </a>
                            <a target="_blank" href={config.socialLinks.linkedin} referrerPolicy="norefer">
                                <LinkedinIcon />
                            </a>
                            <a target="_blank" href={config.socialLinks.instagram} referrerPolicy="norefer">
                                <InstagramIcon />
                            </a>
                            <a target="_blank" href={config.socialLinks.facebook} referrerPolicy="norefer">
                                <FacebookIcon />
                            </a>


                        </div>
                        <p className="handcraft">Handcrafted by me © RJ21 Nagour alaa😅</p>
                        <p className="made-with">Made with ♥ by
                        <a target="_blank" href="https://www.gatsbyjs.com/" referrerPolicy="norefer" style={{ paddingTop: 5 }}>
                                <img src={GatsbyLogo} width="30" />
                            </a>

                        </p>
                    </Typography>
                </Box>
            </Container>
        </section>
    );
};
export default FooterWidgets;