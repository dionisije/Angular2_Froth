/**
 * Created by dick.marjanovic on 17/06/2016.
 */

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, ROUTER_PROVIDERS } from '@angular/router';
import {HomeComponent} from "./static/home.component";

@Component({
    selector: 'froth-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@Routes([
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent }
])

export class AppComponent {
    private name: string = "Dick"
}
