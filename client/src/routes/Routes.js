import React from "react";
import { Route, Switch } from "react-router-dom";
import { MoreInfo } from "../MoreInfo";
import { App } from "../App";
import { Spells } from "../Spells/Spells";
import { RoutePaths } from "./RoutePaths";

export const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path={`/${RoutePaths.ROOT}`}
        component={(props) => <App {...props} />}
      />
      <Route
        path={`/${RoutePaths.DETAILS}`}
        component={(props) => <MoreInfo {...props} />}
      />
      <Route
        path={`/${RoutePaths.SPELLS}`}
        component={() => <Spells locale={"PT_BR"} />}
      />
      <Route
        path={`/${RoutePaths.MONSTERS}`}
        component={() => <Spells locale={"PT_BR"} />}
      />
    </Switch>
  );
};
