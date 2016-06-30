/**
 * Created by dick.marjanovic on 29/06/2016.
 */

import { Component } from "@angular/core";
import { Router, OnActivate, RouteSegment } from "@angular/router";

import {AlbumService} from "./album.service";
import {IAlbum} from "./album";

@Component({
    templateUrl: 'app/album-detail.component.html',

})

export class AlbumDetailComponent implements OnActivate {
    album: IAlbum;
    errorMessage: string;

    constructor(private _albumService: AlbumService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        console.log('routerOnActive id: ' + id);
        this.getAlbum(id);
    }

    getAlbum(id: string) {
        this._albumService.getAlbum(id)
            .subscribe(
                album => this.album = album,
                error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/discography']);
    }

}