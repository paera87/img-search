import { Component, OnInit } from '@angular/core';
import {FormBuilder}         from '@angular/common';
import {FlickrService}        from '../shared';
@Component({
  moduleId: module.id,
  selector: 'app-flickr',
  templateUrl: 'flickr.component.html',
  styleUrls: ['flickr.component.css']
})
export class FlickrComponent implements OnInit {
  photos: Array<string>;
  formInput: any;
  //model$: Observable<any>;

  constructor(private formBuilder: FormBuilder, private flickrService: FlickrService) {
      this.formInput = this.formBuilder.group({
          'search': ['']
      });
       //this.model$ = 
       this.formInput.controls.search.valueChanges
      .debounceTime(500)
      .switchMap((term: string) => this.flickrService.search(term))
      .subscribe((val: any) => this.photos = val);
  }
  ngOnInit() {
  }

}
