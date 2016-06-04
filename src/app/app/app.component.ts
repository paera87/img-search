import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import {Subject}             from 'rxjs/Subject';
import {PhotoService}        from '../shared';
import {FormBuilder}         from '@angular/common'
@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PhotoService]
})
export class AppComponent implements OnInit {
  photos: Array<string>;
  formInput: any;
  model$: Observable<any>;

  constructor(private formBuilder: FormBuilder, private photoService: PhotoService) {
      this.formInput = this.formBuilder.group({
          'search': ['']
      });
       this.model$ = this.formInput.controls.search.valueChanges
      .debounceTime(500)
      .switchMap((term: string) => this.photoService.search(term))
      .subscribe((val: any) => this.photos = val);
  }
  ngOnInit() {}
  
  
}
