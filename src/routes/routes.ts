import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import Products from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import AboutUs from "../pages/AboutUs";

export const ROUTES = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/signup",
    component: SignupPage,
    exact: true,
  },
  {
    path: "/products",
    component: Products,
    exact: true,
  },
  {
    path: "/about-us",
    component: AboutUs,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true,
  },
];
