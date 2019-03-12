/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccessoriesService } from './accessories.service';

describe('Service: Accessories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessoriesService]
    });
  });

  it('should ...', inject([AccessoriesService], (service: AccessoriesService) => {
    expect(service).toBeTruthy();
  }));
});
