import { TestBed } from '@angular/core/testing';

import { FormContactService } from './form-contact.service';

describe('FormContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormContactService = TestBed.get(FormContactService);
    expect(service).toBeTruthy();
  });
});
