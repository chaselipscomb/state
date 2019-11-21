import React from "react";

const CartContext = React.createContext({
  image: "",
  name: "",
  saleprice: 0,
  link: "",
  reviews: 0
});

export default CartContext;
