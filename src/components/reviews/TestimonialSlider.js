import React from "react";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const TestimonialSlider = () => {
    const useStyles = makeStyles((theme) => ({
        title: {

        },
        subtitle: {
            marginTop: theme.spacing(2)
        },
        container: {
            width: "100%"
        },
        carouselContainer: {
            width: "100%",
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        image: {
            borderRadius: "50%",
            border: "1px solid whitesmoke"
        },
        review: {
            fontWeight: 300,
            fontSize: 18,
            maxWidth: 800,
            lineHeight: 1.8,
            margin: "auto",
            marginTop: theme.spacing(2)
        },
        name: {
            fontSize: 20,
            fontWeight: 500
        },
        link: {
            fontSize: 16,
            fontWeight: 300,
            "& a": {
                color: theme.palette.info.main,
                fontSize: 14
            }
        }
    }));
    const classes = useStyles();

    const query = graphql`{
        allTestimonialsYaml {
          edges {
            node {
              name
              review
              title
              avatar {
                childImageSharp {
                  fixed(height: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }`;

    const testimonialQuery = useStaticQuery(query);
    const testimonialData = testimonialQuery.allTestimonialsYaml.edges.map((item, index) => {
        return (
            <Typography variant="body1" component="div" color="textPrimary" align="center" className={classes.container} key={index}>
                {item.node.avatar ? <Img
                    fixed={item.node.avatar.childImageSharp.fixed}
                    className={classes.image} /> : ""}
                <p className={classes.review}>{item.node.review}</p>
                <p className={classes.name}>{item.node.name}</p>
                <p className={classes.link}
                    dangerouslySetInnerHTML={{ __html: item.node.title }} />
            </Typography>
        );
    });
    return (
        <React.Fragment>
            <Carousel animation="slide" interval={50000} className={classes.carouselContainer} navButtonsAlwaysVisible={true}>

                {testimonialData}

            </Carousel>

        </React.Fragment>
    );
};
export default TestimonialSlider;