import { makeStyles } from "@mui/styles";
import style from "./ProductPage.styles";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { GlassesContext } from "../context/context";
import { useState } from "react";

const useStyles = makeStyles(style);

const Products = () => {
  const [message, showMessage] = useState(false);

  const ctx = useContext(GlassesContext);

  const classes = useStyles();

  const products: any = [
    {
      name: "glasses 1",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
    {
      name: "glasses 2",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
    {
      name: "glasses 3",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
    {
      name: "glasses 4",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
    {
      name: "glasses 5",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
    {
      name: "glasses 6",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
    {
      name: "glasses 7",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
    {
      name: "glasses 8",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
    {
      name: "glasses 9",
      picture:
        "https://media.gettyimages.com/photos/glasses-picture-id183331232?s=612x612",
      price: 45,
      amount: 1,
    },
  ];

  const showMessageHandler = () => {
    showMessage(true);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        {message && (
          <div
            style={{
              width: "100%",

              color: "red",
              fontWeight: "600",
            }}
          >
            <p>Please log in first...</p>
          </div>
        )}
        {products.map((product: any) => (
          <div key={product.name} className={classes.product}>
            <img
              src={product.picture}
              alt="glasses"
              sizes="fill"
              height={150}
              width={250}
            ></img>
            <p>Name : {product.name}</p>
            <hr></hr>
            <p>price : {product.price} $</p>
            <Button
              onClick={() => {
                if (!ctx.isLoggedIn) {
                  showMessageHandler();
                } else if (ctx.isLoggedIn) ctx.addItem(product);
              }}
              variant="contained"
            >
              Order now
            </Button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Products;
