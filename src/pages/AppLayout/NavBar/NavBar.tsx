import React, { type ReactElement } from "react";

import { NavLink } from "react-router-dom";

import FormattedMessage from "@src/components/FormattedMessage";
import Li from "@src/components/li";
import Ul from "@src/components/ul";

import { Root, Header, RouteLink } from "./NavBar.styles";
import SelectLanguages from "./SelectLanguages";

const NavBar = (): ReactElement => (
  <Root>
    <Header>
      <Ul>
        <Li>
          <RouteLink as={NavLink} to="/home" id="cy-home-link">
            <FormattedMessage id="ROUTES.HOME.NAME" />
          </RouteLink>
        </Li>
      </Ul>
      <SelectLanguages />
    </Header>
  </Root>
);

export default NavBar;
