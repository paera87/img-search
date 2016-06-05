import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ImgurService {
constructor(private http: Http) { };

    search(query: string) {
      let url = `https://api.imgur.com/3/gallery/t/${query}.json?perPage=12`;
      var authHeader = new Headers();
        authHeader.append('Authorization','Client-ID 555adec00b0882f');
        return this.http
            .get(url,{
            headers: authHeader
            })
            .map(res => res.json())
            .map((val) => {
                if (val.success === true) {
                    console.log(val.success);
                    return val.data.items.map((photo: any) => {
                        return {
                            url: `http://i.imgur.com/${photo.id}.jpgm`,
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
