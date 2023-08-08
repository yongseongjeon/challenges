import { ROUTE_PATH } from "../route";

export type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
