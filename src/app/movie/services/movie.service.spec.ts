import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialModule } from '../../material.module';
import { MovieService } from './movie.service';
import { MatSnackBar } from '@angular/material';

import { UiService } from '../../shared/ui-service.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule, HttpClientTestingModule],
      providers: [UiService, MatSnackBar, MovieService, HttpTestingController, HttpClient]
    });
    service = TestBed.get(MovieService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
