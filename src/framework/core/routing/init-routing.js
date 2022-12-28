import { RoutingModule } from "./routing.module";
import { _ } from "../../tools/util";

export function initRouting(routes, dispatcher) {
    if (_.isUndefined(routes)) return;

    let routing = new RoutingModule(routes, dispatcher);
    routing.init();
}
