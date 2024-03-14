import { lazy } from "react";
const HomePage = lazy(() => import("pages/HomePage"));
const Product = lazy(() => import("pages/Product"));
const Login = lazy(() => import("pages/Login"));
const Settings = lazy(() => import("pages/Settings"));
const ShopCard = lazy(() => import("pages/ShopCard"));

const mainRoutes = [
  {
    path: "/",
    title: "HomePage",
    component: HomePage,
  },
  {
    path: "/:id",
    title: "Product",
    component: Product,
  },
  {
    path: "/login",
    title: "Login",
    component: Login,
  },
  {
    path: "/shoppingCard",
    title: "ShoppingCard",
    component: ShopCard,
  },
  {
    path: "/settings",
    title: "Settings",
    component: Settings,
  },
];

export default mainRoutes;
