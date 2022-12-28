import { WFMComponent } from "framework";

class DirectivePageComponent extends WFMComponent {
    constructor(config) {
        super(config);

        this.data = {
            title: "Главная страница работает!!!",
            linkTitle: "Перейти на страницу табов",
        };
    }
}

export const directivePageComponent = new DirectivePageComponent({
    selector: "app-directive-page",
    template: `
    <div class="row">
        <div class="col s6 offset-s3 dir__block">
            <h2 appHover="red">Наведи на меня</h2>
        </div>
    </div>
    `,
    styles: `
        .dir__block { margin-top: 30px;}
    `,
});
