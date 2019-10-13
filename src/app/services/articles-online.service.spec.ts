import { TestBed } from '@angular/core/testing';

import { ArticlesOnlineService } from './articles-online.service';

describe('ArticlesOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesOnlineService = TestBed.get(ArticlesOnlineService);
    expect(service).toBeTruthy();
  });
});
