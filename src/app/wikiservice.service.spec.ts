import { TestBed } from '@angular/core/testing';

import { wikiservice } from './wikiservice.service';

describe('wikiservice', () => {
  let service: wikiservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(wikiservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
