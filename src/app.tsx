import { ReactElement } from "react";

import ReduxProvider from "./redux/redux-provider";
import HashRouter from "./routes/hash-router";
import StyleProvider from "./style/style-provider";

const App = (): ReactElement => (
  <ReduxProvider>
    <StyleProvider>
      <HashRouter />
    </StyleProvider>
  </ReduxProvider>
);

export default App;
