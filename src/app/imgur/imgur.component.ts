import { Component, OnInit } from '@angular/core';
import {ImgurService}        from '../shared';
import {FormBuilder}         from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-imgur',
  templateUrl: 'imgur.component.html',
  styleUrls: ['imgur.component.css']
})
export class ImgurComponent implements OnInit {
  photos: Array<string>;
  formInput: any;
  //model$: Observable<any>;

  constructor(private formBuilder: FormBuilder, private imgurService: ImgurService) {
      this.formInput = this.formBuilder.group({
          'search': ['']
      });
       //this.model$ = 
       this.formInput.controls.search.valueChanges
      .debounceTime(500)
      .switchMap((term: string) => this.imgurService.search(term))
      .subscribe((val: any) => this.photos = val);
  }
  ngOnInit() {
  }

}
