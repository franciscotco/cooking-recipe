import { lazy } from "react";

const Error404 = lazy(
  () =>
    import(
      /* webpackChunkName: "error-404" */
      "./error-404"
    )
);

export default Error404;
