import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';
import { App } from '../app/App';
import { Spells } from '../spells/Spells';
import { Monsters } from '../monsters/Monsters';
import { Features } from '../features/Features';
import { Classes } from '../classes/Classes';

export const Routes = () => {
  // TODO use nested object
  return (
    <Switch>
      <Route
        exact
        path={`${RoutePaths.ROOT}`}
        component={props => <App {...props} />}
      />
      <Route path={`/${RoutePaths.SPELLS}`} component={() => <Spells />} />
      <Route path={`/${RoutePaths.FEATURES}`} component={() => <Features />} />
      <Route path={`/${RoutePaths.CLASSES}`} component={() => <Classes />} />
      <Route path={`/${RoutePaths.MONSTERS}`} component={() => <Monsters />} />
    </Switch>
  );
};
