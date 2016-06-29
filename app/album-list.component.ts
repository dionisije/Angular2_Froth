/**
 * Created by dick.marjanovic on 28/06/2016.
 */

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AlbumService} from "./album.service";
import {IAlbum} from "./album";

@Component({
    templateUrl: 'app/album-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AlbumListComponent implements OnInit {
    errorMessage: string;
    albums: IAlbum[];

    private _items: string[] = ['one', 'two', 'three', 'four', 'five'];

    constructor(private _albumService: AlbumService) { }



    ngOnInit(): void {
        this._albumService.getAlbums()
            .subscribe(
                albums => this.albums = albums,
                error => this.errorMessage = <any>error
            );
    }
}