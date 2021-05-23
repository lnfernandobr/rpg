import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';
import { App } from '../app/App';
import { Spells } from '../spells/Spells';

export const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path={`${RoutePaths.ROOT}`}
        component={props => <App {...props} />}
      />
      <Route path={`/${RoutePaths.SPELLS}`} component={() => <Spells />} />
    </Switch>
  );
};
