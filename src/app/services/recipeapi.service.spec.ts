import { TestBed } from '@angular/core/testing';

import { RecipeapiService } from './recipeapi.service';

describe('RecipeapiService', () => {
  let service: RecipeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
