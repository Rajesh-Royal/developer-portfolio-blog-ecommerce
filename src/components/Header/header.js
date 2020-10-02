import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "gatsby";

const Header = (props) => {
    const useStyles = makeStyles((theme) => ({
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
    return (
        <AppBar position="relative" className={classes.background}>
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
    );
};
export default Header;