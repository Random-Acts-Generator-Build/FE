import React from "react";
import { Switch, Route } from "react-router-dom";
import Acts from "./Acts";
import Home from "./Home.js";
import ContactList from "./ContactList.js"
import CreateAct from "./CreateAct.js";
import Randomizer from "./Randomizer.js"

export default function AppRouter() {
  return (
    <div>
      <Switch>
        <Route path="/acts" component={Acts} />
        <Route exact path= "/" component={Home} />
        <Route path="/contacts" component={ContactList} />
        <Route path="/randomizer" component={Randomizer} />
      </Switch>
    </div>
  );
}