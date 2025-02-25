import { memo, type ReactElement } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import AppLayout from "@src/pages/app-layout";
import Error404 from "@src/pages/error-404";
import Recipies from "@src/pages/recipies";

const Router = (): ReactElement => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Recipies />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default memo(Router);
