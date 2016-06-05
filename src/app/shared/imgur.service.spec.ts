import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ImgurService } from './imgur.service';

describe('Imgur Service', () => {
  beforeEachProviders(() => [ImgurService]);

  it('should ...',
      inject([ImgurService], (service: ImgurService) => {
    expect(service).toBeTruthy();
  }));
});
