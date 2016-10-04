import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from "./heroDetail/heroDetail.component";
import { HeroesComponent } from './heroComponent/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './hero/hero.service';
import { AppComponent } from './app.component';
import { HeroesRouting } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, HeroesRouting],
    declarations: [AppComponent, HeroDetailComponent, HeroesComponent,DashboardComponent],
    bootstrap: [AppComponent],
    providers: [HeroService]
})
export class AppModule {}
