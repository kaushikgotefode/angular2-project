import { Component } from '@angular/core';
import { HeroesComponent } from './heroComponent/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})

export class AppComponent {
    title = 'Tour of Heroes';
}
