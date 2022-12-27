import "./styles.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "materialize-css";

import { bootstrap, _ } from "framework";
import { appModule } from "./app/app.module";

_.delay().then(() => {
    bootstrap(appModule);
});
