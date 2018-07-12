import { Switch, Route } from "react-router-dom";
import React from "react";
import Products from "./Products.js";
import Details from "./Details.js";


const theRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Products}/>
      <Route path="/details/:id" component={Details}/>
    </Switch>
  );
};

export default theRoute();
