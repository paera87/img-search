import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FlickrService {
 constructor(private http: Http) { };

    search(query: string) {
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=95bfdf66f8b40fb0528d7c950970cae6&tags=${query}&per_page=12&format=json&nojsoncallback=1`;
        return this.http
            .get(url)
            .map(res => res.json())
            .map((val) => {
                if (val.stat === 'ok') {
                    return val.photos.photo.map((photo: any) => {
                        return {
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
                            title: photo.title
                        }
                    })
                }
                else {
                    return [];
                }
            });
    }
}
