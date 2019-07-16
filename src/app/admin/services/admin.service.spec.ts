import { TestBed } from '@angular/core/testing';
import { AdminService } from './admin.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AdminService', () => {
  let service: AdminService;
  const theatreData = { tid: '123', name: 'SPI', city: 'Bengaluru', gLocation: '12.91,77.50', capacity: '120' };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AdminService, HttpClient]
    });
    service = TestBed.get(AdminService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('searchMovie', () => {
    service.searchMovie('ven');
  });

  it('saveNowPlaying', () => {
    service.saveNowPlaying('venom', '111');
  });

  it('newTheater', () => {
    service.newTheater(theatreData);
  });
});
