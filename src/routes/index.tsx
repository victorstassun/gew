import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Menu from '../pages/Menu';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/mainmenu" component={Menu} />
    </Switch>
);

export default Routes;