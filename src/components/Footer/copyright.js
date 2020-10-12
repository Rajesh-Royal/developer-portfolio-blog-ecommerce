import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

const Copyright = () => {
    const useStyles = makeStyles((theme) => ({
        Copyright: {
            backgroundColor: theme.palette.secondary.dark,
            padding: theme.spacing(1),
            "& a": {
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                    color: theme.palette.secondary.light
                }
            }
        },
    }));
    const classes = useStyles();
    return (
        <Typography variant="body2" color="textPrimary" align="center" className={classes.Copyright}>
            {"Copyright © "}
            <a color="inherit" href="https://rajeshroyal.com/" target="_blank">
                Rajesh Royal
                </a>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};
export default Copyright;