import { homePageComponent } from "./pages/home-page.component";
import { tabsPageComponent } from "./pages/tabs-page.component";
import { directivePageComponent } from "./pages/directive-page.component";

import { notFound } from "./shared/not-found.component";

export const appRoutes = [
    { path: "", component: homePageComponent },
    { path: "tabs", component: tabsPageComponent },
    { path: "directive", component: directivePageComponent },
    { path: "**", component: notFound },
];
