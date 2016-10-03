import { Component, Input, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HeroService } from './hero/hero.service';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [HeroService]

})
export class AppComponent implements OnInit {
    // ngOnInIt():void {
    //     this.getHeroes();
    // }

    title: string;
    heroes: HeroComponent[];
    selectedHero: HeroComponent

    constructor(private _heroService: HeroService) {
        this.title = "Tour of Heroes";
        this.heroes = this._heroService.getHeroes();
    }


    onSelect(hero: HeroComponent): void {
        this.selectedHero = hero;
    }

    // getHeroes(){
    //     this.heroes = this._heroService.getHeroes();
    // }


}
