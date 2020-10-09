import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { Link } from "gatsby";

const Header = (props) => {
    const useStyles = makeStyles((theme) => ({
        anchor: {
            position: "fixed",
            zIndex: 100,
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        background: {
            background: theme.palette.secondary.main
        },
        title: {
            marginRight: theme.spacing(2),
            flexGrow: 1,
            "& a": {
                textDecoration: "none",
                color: theme.palette.text.primary
            }
        },
        menu: {
            display: "flex",
            alignItems: "center",
            "& a": {
                textDecoration: "none",
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                fontSize: 16,
                color: theme.palette.text.primary,
            }
        }
    }));
    const classes = useStyles();

    // scroll to top function
    function ScrollTop(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 10,
        });

        const handleClick = (event) => {
            const anchor = document.querySelector("#back-to-top-anchor");
            if (anchor) {
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        };

        return (
            <Zoom in={trigger}>
                <div onClick={handleClick} role="presentation" className={classes.anchor}>
                    {children}
                </div>
            </Zoom>
        );
    }

    return (
        <React.Fragment>
            <AppBar position="relative" className={classes.background} id="header">
                <Toolbar className="header-toolbar">
                    <div className={classes.title}>
                        <Typography variant="h6" color="inherit" noWrap className="align-center">
                            <Link to="/">Rajesh Royal</Link>
                        </Typography>
                    </div>
                    <nav className={classes.menu}>
                        <Typography color="inherit" noWrap>
                            <Link to="/blog">Blog</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/">Resume</Link>
                        </Typography>
                        <IconButton aria-label="light/dark theme switch" color="default" onClick={() => window.open("https://github.com/Rajesh-Royal", "_blank")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton aria-label="light/dark theme switch" color="default" onClick={props.handleClick}>
                            {props.themeType === "dark" ? <BrightnessHighIcon /> : <Brightness6Icon />}
                        </IconButton>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                        body { background: ${props.themeType == "light" ? "white" : "#2b3e50"} }
                    `}} />

                    </nav>
                </Toolbar>
            </AppBar>
            <div id="back-to-top-anchor"></div>
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
};
export default Header;