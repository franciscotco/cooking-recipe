import { memo, type ReactElement } from "react";

import { Outlet } from "react-router-dom";

import SuspenseLoader from "@src/components/suspense-loader";

import { App as Root, Body } from "./app-layout.styles";

const AppLayout = (): ReactElement => (
  <Root>
    <Body>
      <SuspenseLoader>
        <Outlet />
      </SuspenseLoader>
    </Body>
  </Root>
);

export default memo(AppLayout);
