/**
 * Created by dick.marjanovic on 17/06/2016.
 */

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Route, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

import {HomeComponent} from "./static/home.component";
import {HistoryComponent} from "./static/history.component";
import {PhilosophyComponent} from "./static/philosophy.component";
import {AlbumListComponent} from "./album-list.component";
import {AlbumDetailComponent} from "./album-detail.component";
import {AlbumService} from "./album.service";

@Component({
    selector: 'froth-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, AlbumService, HTTP_PROVIDERS]
})

@Routes([
    new Route({ path: '/', component: HomeComponent }),
    new Route({ path: '/home', component: HomeComponent }),
    new Route({ path: '/discography', component: AlbumListComponent }),
    new Route({ path: '/album/:id', component: AlbumDetailComponent }),
    new Route({ path: '/history', component: HistoryComponent }),
    new Route({ path: '/philosophy', component: PhilosophyComponent })
])

export class AppComponent {
    private name: string = "Dick"
}
