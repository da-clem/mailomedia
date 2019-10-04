import React, { lazy } from 'react'
import { withRouter, Switch, Route } from "react-router-dom"
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import { Arrow } from './components/icons'

const BackLink = styled(Link)`
  display: block;

  svg {
    transform: rotate(90deg) scale(1.5);

    path, rect {
      fill: black;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
`

const Tab = styled(Link)`
  display: block;
  padding: .5rem 1rem;
  font-weight: ${({ active }) => active ? 'bold' : 'inherit'};
  border-bottom: 2px solid transparent;
  border-color: ${({ active }) => active ? '#29ABE0' : 'transparent'};

  &:hover {
    text-decoration: none;
    color: #29ABE0;
  }
`

function PortfolioPage({ location }) {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between pt-4 pb-2">
        <BackLink to="/"><Arrow /></BackLink>
        <h2>Portfolio</h2>
        <br />
      </div>
      <Tabs>
        <Tab to="/portfolio/darty" active={location.pathname === "/portfolio/darty"}>
          Darty
        </Tab>
        <Tab to="/portfolio/pierre-ricaud" active={location.pathname === "/portfolio/pierre-ricaud"}>
          Dr Pierre Ricaud
        </Tab>
        <Tab to="/portfolio/tui" active={location.pathname === "/portfolio/tui"}>
          TUI
        </Tab>
        <Tab to="/portfolio/galeries" active={location.pathname === "/portfolio/galeries"}>
          Galeries Lafayettes
        </Tab>
      </Tabs>

      <Switch location={location}>
        <Fade>
          <Route exact path="/portfolio/darty" component={lazy(() => import('./components/projects/Darty'))} />
          <Route exact path="/portfolio/pierre-ricaud" component={lazy(() => import('./components/projects/PierreRicaud'))} />
          <Route exact path="/portfolio/tui" component={lazy(() => import('./components/projects/TUI'))} />
          <Route exact path="/portfolio/galeries" component={lazy(() => import('./components/projects/GaleriesLafayettes'))} />
        </Fade>
      </Switch>
    </div>
  );
}


export default withRouter(PortfolioPage)
