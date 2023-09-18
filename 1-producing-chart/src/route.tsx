import Chart from "./pages/Chart/Chart";
import InputScore from "./pages/InputScore/InputScore";
import { RoutePath } from "./types/Route";

const ROUTE_PATH = {
  INPUT_SCORE: "/",
  CHART: "/chart",
} as const;

interface RouteConfig {
  id: number;
  path: RoutePath;
  element: React.ReactNode;
}

const routeConfigs: RouteConfig[] = [
  { id: 0, path: ROUTE_PATH.INPUT_SCORE, element: <InputScore /> },
  { id: 1, path: ROUTE_PATH.CHART, element: <Chart /> },
];

export { ROUTE_PATH, routeConfigs };
