import { createBrowserRouter } from "react-router-dom";
import { Main } from "./views/Main/Index";
import React from "react";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);