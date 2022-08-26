import { makeStyles } from "@mui/styles";
import style from "./HeaderrBox.styles";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { GlassesContext } from "../context/context";
import { ShoppingCart } from "phosphor-react";
import { useState } from "react";

const useStyles = makeStyles(style);
const MainHeader = ({ showCart }: any) => {
  const ctx = useContext(GlassesContext);
  const history = useHistory();
  const classes = useStyles();

  const [message, showMessage] = useState(false);

  return (
    <Box className={classes.container}>
      <Button onClick={() => history.push("/login")} className={classes.button}>
        Log in page
      </Button>
      <Button
        className={classes.button}
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </Button>
      <Button
        className={classes.button}
        onClick={() => {
          history.push("/signup");
        }}
      >
        Your Oppinion
      </Button>
      <Button
        className={classes.button}
        onClick={() => {
          history.push("/products");
        }}
      >
        Products
      </Button>
      <Button
        onClick={() => history.push("/about-us")}
        className={classes.button}
      >
        About us
      </Button>
      <Button
        className={classes.button}
        onClick={() => {
          if (ctx.isLoggedIn) showCart();
          else if (!ctx.isLoggedIn) {
            showMessage((prev) => !prev);
          }
        }}
      >
        <ShoppingCart size={20} weight="fill" style={{ marginRight: "10px" }} />
        {ctx.itemNumber.length}
      </Button>
      {message && !ctx.isLoggedIn && <div>Please Log in to use Cart</div>}
    </Box>
  );
};

export default MainHeader;
