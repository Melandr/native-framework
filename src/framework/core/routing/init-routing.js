import { RoutingModule } from "./routing.module";
import { _ } from "../../tools/util";

export function initRouting(routes) {
    if (_.isUndefined(routes)) return;

    let routing = new RoutingModule(routes);
    routing.init();
}
