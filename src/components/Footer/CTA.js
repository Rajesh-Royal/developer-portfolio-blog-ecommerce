import React from "react";
import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

const CTA = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            position: "relative",
            zIndex: 50,
            padding: 0
        },
        paper: {
            marginBottom: "-70px",
            background: theme.palette.secondary.dark
        },
        container: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap"
        },
        info: {
            margin: `${theme.spacing(2)}px 10px`,
            fontSize: 18,
            lineHeight: 1.8
        },
        heading: {
            margin: `${theme.spacing(2)}px 10px`
        },
        button: {
            color: theme.palette.info.main,
            border: `1px solid ${theme.palette.info.main}`,
            margin: `${theme.spacing(2)}px 10px`,
            borderRadius: "50px",
            background: "none",
            padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
            fontSize: 18,
            cursor: "pointer",
            "&:focus": {
                outline: "none"
            }
        }
    }));
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Box py={5} width="100%">
                    <Typography variant="body1" color="textPrimary" align="center" component="div" className={classes.container}>
                        <h2 className={classes.heading}>Start a project</h2>
                        <p className={classes.info}>Interested in working together? We should <br /> queue up a chat. I’ll buy the coffee. </p>
                        <Link to="/contact">
                            <button className={classes.button}>
                                Let's do this
                        </button>
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};
export default CTA;
