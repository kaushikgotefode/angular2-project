import { Component, Input } from "@angular/core";
import { Heroes } from "./../hero/hero"

@Component({
    selector: 'hero-detail',
    templateUrl: './app/heroDetail/heroDetail.component.html',
    styleUrls: ['./app/heroDetail/heroDetail.component.css']
})

export class HeroDetailComponent {


    @Input('hero') selectedHero: Heroes
        //we can write this as @Input() hero:HeroComponent
    constructor() {}
}
