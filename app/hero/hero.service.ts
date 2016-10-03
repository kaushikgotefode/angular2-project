import { Injectable } from '@angular/core';
import { HeroComponent } from './../hero/hero.component';
import { HEROES } from './../hero/hero-mock-data';

@Injectable()

export class HeroService {
    getHeroes(): HeroComponent[] {
        return HEROES;
        
    }
}
