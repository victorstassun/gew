import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Login from '../pages/Login';
import Menu from '../pages/Menu';
import RegisterConsultants from '../pages/Projects';
import Projects from '../pages/Projects';
import RegisterProjects from '../pages/RegisterProjects';
import EditProjects from '../pages/EditProjects';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/mainmenu" component={Menu} />
        <Route path="/projects" component={Projects} />
        <Route path="/registerprojects" component={RegisterProjects} />
        <Route path="/editprojects" component={EditProjects} />
        <Route path="/registerconsultants" component={RegisterConsultants} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default Routes;