import { lazy } from "react";

const Recipies = lazy(
  () =>
    import(
      /* webpackChunkName: "recipies" */
      "./recipies"
    )
);

export default Recipies;
