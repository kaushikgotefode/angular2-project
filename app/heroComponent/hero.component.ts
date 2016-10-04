import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from './../hero/hero';
import { HeroService } from './../hero/hero.service';


@Component({
    moduleId: module.id,
    selector: 'my-heros',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
    providers: [HeroService]

})
export class HeroesComponent{

    ngOnInIt(): void {
        this.getHeroes();
    }

    title: string;
    heroes: Heroes[];
    selectedHero: Heroes

    constructor(private _heroService: HeroService) {
        this.title = "Tour of Heroes";
        this.heroes = this._heroService.getHeroes();
    }


    onSelect(hero: Heroes): void {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroes = this._heroService.getHeroes();
    }


}
