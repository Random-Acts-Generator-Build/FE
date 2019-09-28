import React from "react";
import { Switch, Route } from "react-router-dom";
import Acts from "./Acts";
import Home from "./Home.js";
import CreateAct from "./CreateAct.js";

export default function AppRouter() {
  return (
    <div>
      <Switch>
        <Route path="/acts" component={Acts} />
        <Route exact path= "/" component={Home} />
      </Switch>
    </div>
  );
}