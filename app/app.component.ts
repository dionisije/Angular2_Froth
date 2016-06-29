/**
 * Created by dick.marjanovic on 17/06/2016.
 */

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

import {HomeComponent} from "./static/home.component";
import {HistoryComponent} from "./static/history.component";
import {PhilosophyComponent} from "./static/philosophy.component";
import {AlbumListComponent} from "./album-list.component";
import {AlbumService} from "./album.service";

@Component({
    selector: 'froth-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, AlbumService, HTTP_PROVIDERS]
})

@Routes([
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent },
    { path: '/discography', component: AlbumListComponent },
    { path: '/history', component: HistoryComponent },
    { path: '/philosophy', component: PhilosophyComponent }
])

export class AppComponent {
    private name: string = "Dick"
}
