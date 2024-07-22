import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import { ROUTES } from "./routes";

export const RoutesList: TypeRouteList[] = [
  {
    element: RegisterPage,
    path: ROUTES.REGISTER(),
  },
  {
    element: HomePage,
    path: ROUTES.HOME(),
  },
  {
    element: LoginPage,
    path: ROUTES.LOGIN(),
  },
  {
    element: NotFoundPage,
    path: "*",
  },
];

export type TypeRouteList = {
  element: () => JSX.Element;
  path: string;
};
