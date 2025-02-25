import { type ReactElement } from "react";

import { NavLink } from "react-router-dom";

import Li from "@src/components/li";
import Ul from "@src/components/ul";

import { Root, Header, RouteLink } from "./nav-bar.styles";

const NavBar = (): ReactElement => (
  <Root>
    <Header>
      <Ul>
        <Li>
          <RouteLink as={NavLink} to="/" id="cy-home-link">
            Acceuil
          </RouteLink>
        </Li>
      </Ul>
    </Header>
  </Root>
);

export default NavBar;
