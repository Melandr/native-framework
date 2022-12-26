import "./styles.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "materialize-css";

import { bootstrap } from "./framework/core/bootstrap";
import { appModule } from "./app/app.module";
import { wfm } from "./framework";


wfm.delay().then(() => {
    bootstrap(appModule);
});
