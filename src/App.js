import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles";
import { Helmet } from "react-helmet";
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
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width"></meta>
          <title>Mailo Media | Agence Webmarketing</title>
        </Helmet>
        <Switch location={location}>
          <Route path="/portfolio" component={lazy(() => import('./PortfolioPage'))} />
          <Route exact path="/" component={lazy(() => import('./HomePage'))} />
        </Switch>
        <div id="modal-root"></div>
        <Imports />
      </Suspense>
    </ThemeProvider>
  );
}

export default withRouter(App);
