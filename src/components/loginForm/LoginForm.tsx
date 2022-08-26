import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { GlassesContext } from "../../context/context";
import { makeStyles } from "@mui/styles";
import style from "./ContactForm.styles";
const useStyles = makeStyles(style);

const LoginForm = () => {
  const classes = useStyles();
  const ctx = useContext(GlassesContext);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validationSchema: Yup.object({
      userEmail: Yup.string().email().required("Required"),
      userPassword: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      ctx.loginHandler();
      history.push("/");
    },
  });

  return (
    <div className={classes.container}>
      <form style={{ color: "white" }}>
        <Grid item style={{ paddingBottom: 26 }}>
          <TextField
            type="userPassword"
            size="small"
            name="userEmail"
            style={{ width: "100%" }}
            placeholder="Enter your email"
            value={formik.values.userEmail}
            onChange={formik.handleChange}
          />
          {formik.touched.userEmail && formik.errors.userEmail ? (
            <p style={{ color: "red" }}>{formik.errors.userEmail}</p>
          ) : null}
        </Grid>
        <Grid item style={{ paddingBottom: 26 }}>
          <TextField
            type="password"
            size="small"
            name="userPassword"
            style={{ width: "100%" }}
            placeholder="Please enter your password"
            value={formik.values.userPassword}
            onChange={formik.handleChange}
          />
          {formik.touched.userPassword && formik.errors.userPassword ? (
            <p style={{ color: "red" }}>{formik.errors.userPassword}</p>
          ) : null}
        </Grid>

        <Button onClick={() => formik.handleSubmit()}>Submit</Button>
        <Button
          onClick={() => {
            ctx.loginHandler();
            history.push("/");
          }}
        >
          Logout
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
