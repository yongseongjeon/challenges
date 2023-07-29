import ChartBar from "./pages/ChartBar/ChartBar";
import ChartPi from "./pages/ChartPi/ChartPi";
import InputScore from "./pages/InputScore/InputScore";

const ROUTE_PATH = {
  INPUT_SCORE: "/",
  CHART_PI: "/chart/pi",
  CHART_BAR: "/chart/bar",
} as const;

type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];

interface RouteConfig {
  id: number;
  path: RoutePath;
  element: React.ReactNode;
}

const routeConfigs: RouteConfig[] = [
  { id: 0, path: ROUTE_PATH.INPUT_SCORE, element: <InputScore /> },
  { id: 1, path: ROUTE_PATH.CHART_PI, element: <ChartPi /> },
  { id: 2, path: ROUTE_PATH.CHART_BAR, element: <ChartBar /> },
];

export { ROUTE_PATH, routeConfigs };
