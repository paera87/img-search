import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { FlickrService } from './flickr.service';

describe('Flickr Service', () => {
  beforeEachProviders(() => [FlickrService]);

  it('should ...',
      inject([FlickrService], (service: FlickrService) => {
    expect(service).toBeTruthy();
  }));
});
