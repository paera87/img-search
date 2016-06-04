import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PhotoService } from './photo.service';

describe('Photo Service', () => {
  beforeEachProviders(() => [PhotoService]);

  it('should ...',
      inject([PhotoService], (service: PhotoService) => {
    expect(service).toBeTruthy();
  }));
});
