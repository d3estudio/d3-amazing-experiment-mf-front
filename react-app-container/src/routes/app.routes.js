import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../layout';
import Refunds from '../pages/Refunds';

const AppRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Refunds} />
      </Switch>
    </Layout>

  )
};

export default AppRoutes;