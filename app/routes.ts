import { type RouteConfig, index } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes({
    rootDirectory: "features",
}) satisfies RouteConfig;
