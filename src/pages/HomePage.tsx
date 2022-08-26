import React from "react";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import style from "./HomePage.styles";

import { useContext } from "react";
import { GlassesContext } from "../context/context";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(style);

const HomePage = () => {
  const history = useHistory();
  const classes = useStyles();

  const ctx = useContext(GlassesContext);

  return (
    <React.Fragment>
      <div className={classes.button}>
        <Button
          sx={{ width: 300, height: 50 }}
          size="large"
          variant="contained"
          onClick={() => history.push("/products")}
        >
          Order Now
        </Button>
      </div>
      <div className={classes.commentText}>Satisfied customers</div>
      <div className={classes.comments}>
        {ctx.comments.map((el: { firstName: string; text: string }) => (
          <div key={Math.random()} className={classes.comment}>
            <p>{el.firstName}</p>
            <hr></hr>
            <p>"{el.text}"</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default HomePage;
