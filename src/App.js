import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Home from './components/pages/Homepage';
import Cart from './components/pages/Cart';
import { CartProvider } from "./components/utils/GlobalState";


function App() {
  return (
    <Router>
      <CartProvider>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
      </CartProvider>
    </Router>
  );
}

export default App;
