import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import ClientNew from "../pages/ClientNew";
import Clients from "../pages/Clients";
import ClientEdit from "../pages/ClientEdit";
import ClientDetails from "../pages/ClientDetailsContainer";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/clients/new" component={ClientNew} />
          <Route exact path="/clients/:clientId/edit" component={ClientEdit} />
          <Route exact path="/clients/:clientId" component={ClientDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
