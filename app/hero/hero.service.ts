import { Injectable } from '@angular/core';
import { Heroes} from './../hero/hero';
import { HEROES } from './../hero/hero-mock-data';

@Injectable()

export class HeroService {
    getHeroes(): Heroes[] {
        return HEROES;
        
    }
}
