import React from "react";
import { Route, Switch } from "react-router-dom";
import { MoreInfo } from "../MoreInfo";

export const Routes = () => {
  return (
    <Switch>
      {/* TODO create routePaths with routes of app */}
      <Route path="/more-info" component={(props) => <MoreInfo {...props} />} />
    </Switch>
  );
};
