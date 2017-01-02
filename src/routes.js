import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Homepage from './components/homepage/Homepage';
import Recipes from './components/recipes/Recipes';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="recipes" component={Recipes} />
    </Route>
);