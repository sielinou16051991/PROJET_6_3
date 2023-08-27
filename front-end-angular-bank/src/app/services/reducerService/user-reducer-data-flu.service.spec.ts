import { TestBed } from '@angular/core/testing';

import { UserReducerDataFluService } from './user-reducer-data-flu.service';

describe('UserReducerDataFluService', () => {
  let service: UserReducerDataFluService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserReducerDataFluService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
