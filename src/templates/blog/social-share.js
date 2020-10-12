import React from "react";
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    RedditShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    LinkedinIcon,
    RedditIcon,
} from "react-share";
import config from "../../data/config";
import { Typography, makeStyles } from "@material-ui/core";

const SocialShare = ({ title, path }) => {
    const iconSize = 35;
    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: theme.spacing(6),
            "& button": {
                margin: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
                transition: "all 0.5s",
                "&:focus": {
                    outline: "none"
                },
                "&:hover": {
                    transform: "scale(1.2)"
                },

            },
            "& button:first-child": {
                marginLeft: 0
            }
        }
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="body1" component="div" color="textPrimary">
                <RedditShareButton url={`${config.url}${path}`} title={title}>
                    <RedditIcon round size={iconSize} />
                </RedditShareButton>
                <TwitterShareButton url={`${config.url}${path}`} title={title}>
                    <TwitterIcon round size={iconSize} />
                </TwitterShareButton>
                <FacebookShareButton url={`${config.url}${path}`} quote={title}>
                    <FacebookIcon round size={iconSize} />
                </FacebookShareButton>
                <LinkedinShareButton
                    url={`${config.url}${path}`}
                    title={title}
                    description={title}
                >
                    <LinkedinIcon round size={iconSize} />
                </LinkedinShareButton>
                <TelegramShareButton url={`${config.url}${path}`}>
                    <TelegramIcon round size={iconSize} />
                </TelegramShareButton>
            </Typography>
        </div>
    );
};

export default SocialShare;
