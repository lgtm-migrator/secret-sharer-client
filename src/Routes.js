import React from "react";
import { Route, Switch } from "react-router-dom";
//import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewSecret from "./containers/Home";
import ShowLink from "./containers/ShowLink";
import ShowSecret from "./containers/ShowSecret";
import Privacy from "./containers/Privacy";
import Terms from "./containers/Terms";
import About from "./containers/About";
import Pricing from "./containers/Pricing";
import Contact from "./containers/Contact";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <NewSecret />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/showlink">
        <ShowLink />
      </Route>
      <Route exact path="/secret/:id">
        <ShowSecret />
      </Route>
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      <Route exact path="/terms">
        <Terms />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/pricing">
        <Pricing />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}