import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Page404 from '../pages/Page404';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/repositorio" component={Repository} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default Routes;
