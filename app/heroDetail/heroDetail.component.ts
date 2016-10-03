import { Component, Input } from "@angular/core";
import { HeroComponent } from "./../hero/hero.component"

@Component({
    selector: 'hero-detail',
    templateUrl: './app/heroDetail/heroDetail.component.html',
    styleUrls: ['./app/heroDetail/heroDetail.component.css']
})

export class HeroDetailComponent {


    @Input('hero') selectedHero: HeroComponent
    //we can write this as @Input() hero:HeroComponent
    constructor() {}
}
	