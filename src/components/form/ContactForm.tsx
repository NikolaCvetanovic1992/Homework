import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import style from "./ContactForm.styles";
import React, { useContext } from "react";
import { GlassesContext } from "../../context/context";

const useStyles = makeStyles(style);

const ContactForm = (props: any) => {
  const ctx = useContext(GlassesContext);

  const classes = useStyles();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      surName: "",
      text: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      surName: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);

      let newComment = {
        firstName: values.firstName,
        text: values.text,
      };
      ctx.addComment(newComment);

      history.push("/");
    },
  });

  return (
    <React.Fragment>
      {ctx.isLoggedIn ? (
        <div className={classes.container}>
          <form style={{ color: "white" }}>
            <Grid item style={{ paddingBottom: 26 }}>
              <TextField
                type="email"
                size="small"
                name="email"
                style={{ width: "100%" }}
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
              ) : null}
            </Grid>
            <Grid item style={{ paddingBottom: 26 }}>
              <TextField
                type="firstName"
                size="small"
                name="firstName"
                style={{ width: "100%" }}
                placeholder="Enter your first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <p style={{ color: "red" }}>{formik.errors.firstName}</p>
              ) : null}
            </Grid>
            <Grid item style={{ paddingBottom: 26 }}>
              <TextField
                type="surName"
                size="small"
                name="surName"
                style={{ width: "100%" }}
                placeholder="Enter your last name"
                value={formik.values.surName}
                onChange={formik.handleChange}
              />
              {formik.touched.surName && formik.errors.surName ? (
                <p style={{ color: "red" }}>{formik.errors.surName}</p>
              ) : null}
            </Grid>
            <Grid item style={{ paddingBottom: 26 }}>
              <TextField
                multiline
                type="text"
                size="medium"
                name="text"
                style={{ width: "100%" }}
                placeholder="Please give us your feedback"
                value={formik.values.text}
                onChange={formik.handleChange}
              />
            </Grid>

            <Button onClick={() => formik.handleSubmit()}>Submit</Button>
          </form>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            color: "red",
            fontWeight: "600",
          }}
        >
          Please Login first...
        </div>
      )}
    </React.Fragment>
  );
};

export default ContactForm;
