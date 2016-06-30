/**
 * Created by dick.marjanovic on 28/06/2016.
 */

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {AlbumService} from "./album.service";
import {IAlbum} from "./album";

@Component({
    templateUrl: 'app/album-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AlbumListComponent implements OnInit {
    errorMessage: string;
    albums: IAlbum[];

    constructor(
        private _albumService: AlbumService,
        private _router: Router
    ) { }
    
    ngOnInit(): void {
        this._albumService.getAlbums()
            .subscribe(
                albums => this.albums = albums,
                error => this.errorMessage = <any>error
            );
    }

    somethingClicked(code: IAlbum): void {
        console.log(code.Catalogue + " clicked!");
        let route = ['/album', { id: code.Catalogue }];
        this._router.navigate(route);

    }
}