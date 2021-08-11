import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Sections/Header";
import Footer from "./Components/Sections/Footer";
import Home from "./Components/Pages/Home";
import Characters from "./Components/Pages/Characters";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/characters" exact>
          <Characters />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
