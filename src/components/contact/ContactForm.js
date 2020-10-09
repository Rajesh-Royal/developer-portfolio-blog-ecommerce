import React from "react";
import { Typography, Container, Grid, TextField, Box, TextareaAutosize, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "gatsby";
import Recaptcha from "react-google-recaptcha";
import axios from "axios";
import { Formik, Form, FastField, ErrorMessage, Field } from "formik";
import * as Yup from "yup";


const ContactForm = () => {

    const useStyles = makeStyles((theme => ({
        container: {
            margin: "auto",
            textAlign: "center"
        },
        form: {

        },
        inputContainer: {
            margin: "20px auto",
            width: "100%",
            maxWidth: 700,
            boxSizing: "border-box",
            "& .MuiFormControl-root": {
                width: "100%",
                maxWidth: 700
            },
            "& input, textarea": {
                width: "100%",
                maxWidth: 700,
                color: theme.palette.text.primary,
                fontSize: 18,
                background: "none",
            },
            "& p": {
                textAlign: "left",
                marginTop: theme.spacing(1),
                color: theme.palette.error.main
            }

        },
        textarea: {
            boxSizing: "border-box",
            color: theme.palette.text.primary,
            fontSize: 18,
            background: "none",
            border: "none",
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
            paddingTop: theme.spacing(3),
            "&:focus": {
                outline: "none"
            }
        },
        submitButton: {
            maxWidth: 700
        }
    })));
    const classes = useStyles();
    return (
        <div>
            <section className="contact-form">
                <Container maxWidth="md" className={classes.container}>
                    <Grid container spacing={3}>
                        <Box my={7} width={"100%"}>

                            <Grid lg={12} item>
                                <Typography variant="h2" color="textPrimary" align="center">
                                    Let's connect
                        </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid container spacing={3}>
                        <Box mt={3} mb={7} width={"100%"}>
                            <Grid lg={12} item>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        message: "",
                                        subject: "",
                                        recaptcha: "",
                                    }}
                                    validationSchema={Yup.object().shape({
                                        name: Yup.string().required("Name is required"),
                                        email: Yup.string()
                                            .email("Please enter a valid email!")
                                            .required("Email is required!"),
                                        message: Yup.string().required("Message is required"),
                                        subject: Yup.string().required("subject is required"),
                                        recaptcha: Yup.string().required("Robots are not welcome yet!"),
                                    })}
                                    onSubmit={async (
                                        { name, email, subject, message },
                                        { setSubmitting, resetForm }
                                    ) => {
                                        try {
                                            await axios({
                                                method: "POST",
                                                url: `${process.env.GATSBY_PORTFOLIO_PROXY}${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                                data: JSON.stringify({
                                                    name,
                                                    email,
                                                    subject,
                                                    message,
                                                }),
                                            });
                                            setSubmitting(false);
                                            resetForm();
                                            navigate("/thanks/");
                                        } catch (err) {
                                            setSubmitting(false);
                                            alert(error.response.data.error) // eslint-disable-line
                                        }
                                    }}
                                >
                                    {({ touched, errors, setFieldValue, isSubmitting }) => (
                                        < Form autoComplete="off" className={classes.form}>
                                            <noscript>
                                                <p>This form won’t work with Javascript disabled</p>
                                            </noscript>
                                            <input type="text" name="_gotcha" hidden />
                                            <div className={classes.inputContainer}>
                                                <Field
                                                    as={TextField}
                                                    name="name"
                                                    type="text"
                                                    label="Full Name"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage component={Typography} name="name" />
                                            </div>
                                            <div className={classes.inputContainer}>
                                                <Field
                                                    as={TextField}
                                                    name="email"
                                                    type="email"
                                                    label="Your Email"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage component={Typography} name="email" />
                                            </div>
                                            <div className={classes.inputContainer}>
                                                <Field
                                                    as={TextField}
                                                    name="subject"
                                                    type="text"
                                                    label="Subject"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage component={Typography} name="subject" />
                                            </div>
                                            <div className={classes.inputContainer}>
                                                <Field
                                                    as={TextareaAutosize}
                                                    name="message"
                                                    type="text"
                                                    label="Message"
                                                    autoComplete="off"
                                                    rowsMin={7}
                                                    className={classes.textarea}
                                                />
                                                <ErrorMessage component={Typography} name="message" />
                                            </div>

                                            <div className={classes.inputContainer}>
                                                <FastField
                                                    component={Recaptcha}
                                                    sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
                                                    name="recaptcha"
                                                    onChange={value => {
                                                        if (!value) {
                                                            value = "";
                                                        }
                                                        setFieldValue("recaptcha", value);
                                                    }}
                                                />
                                                <ErrorMessage component={Typography} name="recaptcha" />
                                            </div>
                                            <div className={classes.inputContainer}>
                                                <Button variant="contained" color="primary" type="submit" fullWidth={true}
                                                    disabled={isSubmitting}>
                                                    SEND
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </Grid>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </div >
    );
};

export default ContactForm;
