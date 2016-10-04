import { Component } from '@angular/core';
import { Heroes } from './../hero/hero';
import { HeroService } from './../hero/hero.service'

@Component({
    moduleId: module.id,
    selector: 'hero-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {
    heroes: Heroes[];
    constructor(private _heroService: HeroService) {
        this.heroes = _heroService.getHeroes()
    }

    gotoDetail(hero: Heroes) {
        console.log(hero);
    }
}
