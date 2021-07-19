import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Projects from '../pages/Projects';
import RegisterProjects from '../pages/RegisterProjects';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/mainmenu" component={Menu} />
        <Route path="/projects" component={Projects} />
        <Route path="/registerprojects" component={RegisterProjects} />
    </Switch>
);

export default Routes;