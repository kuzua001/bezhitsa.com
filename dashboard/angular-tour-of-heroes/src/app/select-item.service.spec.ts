import { TestBed, inject } from '@angular/core/testing';

import { SelectItemService } from './select-item.service';

describe('SelectItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectItemService]
    });
  });

  it('should be created', inject([SelectItemService], (service: SelectItemService) => {
    expect(service).toBeTruthy();
  }));
});
