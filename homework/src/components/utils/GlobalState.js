import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

function reducer(state, action) {
  switch (action.type) {
  case "add":
    return [
      ...state,
      {
        id: state.length * Math.random(),
        name: action.name
      }
    ];
  case "remove":
    return state.filter((_, index) => {
      return index !== action.index;
    });
  default:
    return state;
  }
}

function CartProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, [{
    image: "",
    name: "",
    saleprice: 0,
    link: "",
    reviews: 0
  }]);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useCartContext() {
  return useContext(CartContext);
}

export { CartProvider, useCartContext };
