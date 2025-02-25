import React from "react";

import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import StyleProvider from "@src/style/style-provider";

import Spinner from "./Spinner";

storiesOf("Components/Spinner", module)
  .addDecorator(withKnobs)
  .add("Demo", () => (
    <StyleProvider>
      <Spinner />
    </StyleProvider>
  ));
