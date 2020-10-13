import * as React from "react";
import { Typography, Container, Box, Grid, Divider, makeStyles, Card, CardActions, Chip } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

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
            height: "100%",
            "& a": {
                textDecoration: "none",
            }
        },
        label: {
            paddingLeft: theme.spacing(1),
            opacity: 0.6
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
    const data = useStaticQuery(graphql`
     query allSkills{
        allSkillsYaml {
          edges {
           node {
               name
               skills
           }
          }
        }
      }
    `);
    return (

        < section className="blog-section">
            <Container maxWidth="lg">
                <Box mt={12}>
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
                        {
                            data.allSkillsYaml.edges.map((node, index) => {
                                return (
                                    <Grid item xs={12} sm={6} lg={4} key={index}>
                                        <Card className={classes.card}>
                                            <Typography variant="h6" color="inherit" component="p" className={classes.label}>
                                                {node.node.name}:
                                            </Typography>
                                            <CardActions className={classes.chip}>
                                                {
                                                    node.node.skills.map((item, index) => {
                                                        return <Chip label={item} key={index} />;
                                                    })
                                                }

                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Box>
            </Container>
        </section>

    );
};
export default Skills;