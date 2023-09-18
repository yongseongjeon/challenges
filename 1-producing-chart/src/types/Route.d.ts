import { ROUTE_PATH } from "../route";

type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];

export { RoutePath };
