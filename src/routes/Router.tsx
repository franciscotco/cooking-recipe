import React, { memo, type ReactElement } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "@src/pages/AppLayout";
import Error404 from "@src/pages/error-404";
import Recipies from "@src/pages/recipies/recipies";

const Router = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="home" element={<Recipies />} />
        <Route path="recipies" element={<Recipies />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default memo(Router);
