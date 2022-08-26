import React, { useReducer, useState } from "react";

type GlassesContextObj = {
  itemNumber: any;
  totalAmount: number;
  addItem: (item: any) => void;
  comments: any;
  addComment: (supp: any) => void;
  removeItem: (supp: any) => void;
  cart: any;
  isLoggedIn: any;
  loginHandler: () => void;
};

export const GlassesContext = React.createContext<GlassesContextObj>({
  loginHandler: () => {},
  isLoggedIn: false,
  totalAmount: 0,
  addItem: () => {},
  cart: [],
  comments: [],
  addComment: () => {},
  removeItem: () => {},
  itemNumber: [],
});
const defaultCartState = {
  items: [],
  totalAmount: 0,
  itemNumber: [],
};

const cartReducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    const updateItemNumber = state.itemNumber.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.name === action.item.name
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      itemNumber: updateItemNumber,
    };
  }
  if (action.type === "REMOVE") {
    console.log(action.item);

    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.name === action.item.name
    );

    console.log(existingCartItemIndex);

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item: any) => item.name !== action.item.name
      );
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      itemNumber: state.itemNumber.slice(1),
    };
  }
  return defaultCartState;
};

const GlassesContextProvider: any = (props: any) => {
  const [comments, setComments] = useState<any>([
    {
      firstName: "Nikola",
      text: "great",
    },
    {
      firstName: "Katarina",
      text: "great",
    },
    {
      firstName: "Petar",
      text: "excellent",
    },
    {
      firstName: "Darko",
      text: "super",
    },
    {
      firstName: "Darko",
      text: "super",
    },
    {
      firstName: "Darko",
      text: "super",
    },
    {
      firstName: "Darko",
      text: "super",
    },
    {
      firstName: "Darko",
      text: "super",
    },
    {
      firstName: "Darko",
      text: "super",
    },
  ]);

  const [loggedIn, setIsLoggedIn] = useState(false);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addComment = (userinfo: any) => {
    const newSupp = userinfo;

    console.log(userinfo);

    setComments((prevTodos: any) => {
      return prevTodos.concat(newSupp);
    });
  };

  const addItem = (item: any) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItem = (item: any) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const loginHandler = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const contextValue = {
    loginHandler: loginHandler,
    isLoggedIn: loggedIn,
    itemNumber: cartState.itemNumber,
    cart: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    comments: comments,
    addComment: addComment,
    removeItem: removeItem,
  };

  return (
    <GlassesContext.Provider value={contextValue}>
      {props.children}
    </GlassesContext.Provider>
  );
};

export default GlassesContextProvider;
