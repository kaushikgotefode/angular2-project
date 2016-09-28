import { Component } from "@angular/core";

@Component({
    selector: "hero-component",
    template: './hero/hero.component.html',
})

export class HeroComponent {
    id: number;
    name: string;
    p1: string;
    p2: string;
    image:string;

    constructor() {
        this.id;
        this.name;
        this.p1;
        this.p2;
        this.image;
    }

}
