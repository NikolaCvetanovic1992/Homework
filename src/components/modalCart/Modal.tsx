import Box from "@mui/system/Box";
import { makeStyles } from "@mui/styles";
import style from "./Modal.styles";
import React, { useContext } from "react";
import { Button } from "@mui/material";

import { GlassesContext } from "../../context/context";

const useStyles = makeStyles(style);

const ModalCart = ({ showCart }: any) => {
  const classes = useStyles();

  const ctx = useContext(GlassesContext);

  return (
    <div className={classes.container}>
      <Box className={classes.modal}>
        {ctx.cart.map((product: any) => (
          <React.Fragment key={Math.random()}>
            <div className={classes.modalInner}>
              <div>
                <p>{product.name}</p>
                <img
                  src={product.picture}
                  alt="glasses"
                  height={50}
                  width={100}
                ></img>
                <p>
                  {product.price} $ * {product.amount} ={" "}
                  {product.price * product.amount} $
                </p>
              </div>
              <div className={classes.modalButtons}>
                <button
                  onClick={() => {
                    ctx.addItem({ ...product, amount: 1 });
                  }}
                  className={classes.modalInnertwo}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    ctx.removeItem({ ...product });
                  }}
                  className={classes.modalInnertwo}
                >
                  -
                </button>
              </div>
            </div>
            <hr></hr>
          </React.Fragment>
        ))}
        <p>Number of items: {ctx.itemNumber.length}</p>
        <p>{ctx.totalAmount} $</p>
        <Button
          variant="contained"
          onClick={() => {
            showCart();
          }}
        >
          Close cart
        </Button>
      </Box>
    </div>
  );
};

export default ModalCart;
