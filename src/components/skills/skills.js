import * as React from "react";
import { Typography, Container, Box, Grid, Divider, makeStyles, Card, CardActions, Chip } from "@material-ui/core";

const Skills = () => {
    const useStyles = makeStyles((theme) => ({
        divider: {
            maxWidth: "150px",
            margin: "1rem auto"
        },
        card: {
            background: theme.palette.secondary.main,
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            "& a": {
                textDecoration: "none",
            }
        },
        label: {
            paddingLeft: theme.spacing(1),
            color: theme.palette.primary.main
        },
        chip: {
            background: theme.palette.secondary.main,
            flexWrap: "wrap",
            "& .MuiChip-root": {
                background: theme.palette.secondary.dark,
                color: theme.palette.text.primary,
                marginTop: theme.spacing(1),
                marginLeft: 0,
                marginRight: theme.spacing(1),
            }
        }
    }));
    const classes = useStyles();
    return (

        < section className="blog-section">
            <Container maxWidth="lg">
                <Box mt={8}>
                    <Grid spacing={3} container>
                        <Grid component="div" item sm={12}>
                            <Typography variant="h4" color="textPrimary" align="center">
                                Skills
                                </Typography>
                            <Divider variant="middle" className={classes.divider} />
                        </Grid>
                    </Grid>
                </Box>
                {/* ToDo: Optimize code with seprate data file if possible */}
                <Box my={4}>
                    <Grid spacing={3} container>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card className={classes.card}>
                                <Typography variant="h6" color="textPrimary" component="p" className={classes.label}>
                                    Frontend:
                                </Typography>
                                <CardActions className={classes.chip}>
                                    <Chip label="HTML5" />
                                    <Chip label="CSS3" />
                                    <Chip label="ES6" />
                                    <Chip label="JQuery" />
                                    <Chip label="React JS" />
                                    <Chip label="Reactstrap" />
                                    <Chip label="Socket.IO" />
                                    <Chip label="TypeScript" />
                                    <Chip label="Storybook" />
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card className={classes.card}>
                                <Typography variant="h6" color="textPrimary" component="p" className={classes.label}>
                                    Tools:
                                </Typography>
                                <CardActions className={classes.chip}>
                                    <Chip label="VSCode" />
                                    <Chip label="WebStorm" />
                                    <Chip label="AdobeXD" />
                                    <Chip label="PS" />
                                    <Chip label="Git" />
                                    <Chip label="PostMan" />
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card className={classes.card}>
                                <Typography variant="h6" color="textPrimary" component="p" className={classes.label}>
                                    Data Processing:
                                </Typography>
                                <CardActions className={classes.chip}>
                                    <Chip label="GraphQL" />
                                    <Chip label="Rest API" />
                                    <Chip label="Apollo Provider" />
                                    <Chip label="MongoDB" />
                                    <Chip label="MySQL" />
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card className={classes.card}>
                                <Typography variant="h6" color="textPrimary" component="p" className={classes.label}>
                                    CMS & Frameworks:
                                </Typography>
                                <CardActions className={classes.chip}>
                                    <Chip label="WordPress" />
                                    <Chip label="Strapi" />
                                    <Chip label="Bootstrap" />
                                    <Chip label="@Material-UI" />
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card className={classes.card}>
                                <Typography variant="h6" color="textPrimary" component="p" className={classes.label}>
                                    Cloud & CI/CD:
                                </Typography>
                                <CardActions className={classes.chip}>
                                    <Chip label="AWS" />
                                    <Chip label="Netlify" />
                                    <Chip label="Surge" />
                                    <Chip label="Vercel" />
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card className={classes.card}>
                                <Typography variant="h6" color="textPrimary" component="p" className={classes.label}>
                                    Backend:
                                </Typography>
                                <CardActions className={classes.chip}>
                                    <Chip label="Node.js" />
                                    <Chip label="PHP" />
                                    <Chip label="@NestJS" />
                                    <Chip label="Express.js" />
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>

    );
};
export default Skills;