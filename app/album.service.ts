/**
 * Created by dick.marjanovic on 28/06/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IAlbum } from './album';

@Injectable()
export class AlbumService {
    private _albumUrl = 'api/albums.json';

    constructor(private _http: Http) { }

    getAlbums(): Observable<IAlbum[]> {
        return this._http.get(this._albumUrl)
            .map((response: Response) => <IAlbum[]> response.json())
            //.do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAlbum(id: string): Observable<IAlbum> {
        return this.getAlbums()
            .map((albums: IAlbum[]) => albums.find(item => item.catalogue === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
