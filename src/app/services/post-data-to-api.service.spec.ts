import { TestBed, inject } from '@angular/core/testing';

import { PostDataToApiService } from './post-data-to-api.service';

describe('PostDataToApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDataToApiService]
    });
  });

  it('should be created', inject([PostDataToApiService], (service: PostDataToApiService) => {
    expect(service).toBeTruthy();
  }));
});
