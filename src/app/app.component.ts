import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import {Subject}             from 'rxjs/Subject';
import { FlickrService, ImgurService}        from './shared';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {FlickrComponent}     from './flickr';
import {ImgurComponent}      from './imgur';


@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    FlickrService,
    ImgurService
    ]
})
@Routes([
  {path: '/flickr', component: FlickrComponent},
  {path: '/imgur', component: ImgurComponent},
  {path: '', component: FlickrComponent}
])
export class AppComponent{
  
  
  
  
}
