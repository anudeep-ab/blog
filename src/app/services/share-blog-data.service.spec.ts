import { TestBed, inject } from '@angular/core/testing';

import { ShareBlogDataService } from './share-blog-data.service';

describe('ShareBlogDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareBlogDataService]
    });
  });

  it('should be created', inject([ShareBlogDataService], (service: ShareBlogDataService) => {
    expect(service).toBeTruthy();
  }));
});
