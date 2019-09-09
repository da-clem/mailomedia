import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles";
import {
  Imports,
} from "./components";
import Loader from "./Loader";


import "./assets/stylesheets/application.scss";

function App({ location }) {
  return (
    <ThemeProvider theme={{}}>
      <Suspense fallback={<Loader />}>
        <GlobalStyles />
        <Switch location={location}>
          <Route exact path="/portfolio" component={lazy(() => import('./PortfolioPage'))} />
          <Route exact path="/" component={lazy(() => import('./HomePage'))} />
        </Switch>
        <Imports />
      </Suspense>
    </ThemeProvider>
  );
}

export default withRouter(App);
