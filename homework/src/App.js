import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Home from './components/pages/Homepage';
import Cart from './components/pages/Cart';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
      </div>
    </Router>
  );
}

export default App;
