import { TestBed } from '@angular/core/testing';

import { ArticlesLocalService } from './articles-local.service';

describe('ArticlesLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesLocalService = TestBed.get(ArticlesLocalService);
    expect(service).toBeTruthy();
  });
});
