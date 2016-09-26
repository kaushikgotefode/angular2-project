import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    title: string;
    // hero: string;
    constructor() {
        this.title = "Tour of Heroes";
        // this.hero = "Windstorm";
    }

    hero: HeroComponent = {
        id: 10,
        name:"Kaushik"
    }
}
