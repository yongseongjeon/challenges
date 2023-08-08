import Carousel from "./pages/Carousel/Carousel";
import Home from "./pages/Home/Home";
import { RoutePath } from "./types/Route";

export enum ROUTE_PATH {
  HOME = "/",
  CAROUSEL = "/carousel",
}

export interface RouteConfig {
  id: number;
  path: RoutePath;
  element: React.ReactNode;
}

export const routeConfigs: RouteConfig[] = [
  { id: 0, path: ROUTE_PATH.HOME, element: <Home /> },
  { id: 1, path: ROUTE_PATH.CAROUSEL, element: <Carousel /> },
];
