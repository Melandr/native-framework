import { WFMComponent } from "../framework";

class AppComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: "app-root",
    template: `
        <div>
            <h4> App component works!</h4>
            <h6>Does it really works?</h6>
        </div>
    `,
});
