import { lazy } from "react";
const Home = lazy(() => import("pages/Home"));
const Product = lazy(() => import("pages/Product"));

const mainRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/:id",
    title: "Product",
    component: Product,
  },
];

export default mainRoutes;
