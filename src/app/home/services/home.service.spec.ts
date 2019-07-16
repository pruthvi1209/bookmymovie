import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MaterialModule } from '../../material.module';
import { HomeService } from './home.service';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { async } from 'q';

describe('HomeService', () => {
  let service: HomeService;
  let httpClientSpy: { get: jasmine.Spy };
  const storeStub = {
    select: () => ({
      subscribe: () => ({})
    })
  };
  beforeEach(
    () =>
      TestBed.configureTestingModule({
        imports: [MaterialModule, HttpClientModule, HttpClientTestingModule, StoreModule.forRoot({})],
        providers: [{ provide: Store, useValue: storeStub }, { provide: HttpClient, useValue: {} }]
      }),
    (service = TestBed.get(HomeService))
  );

  it('should be created', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HomeService(<any>httpClientSpy, <any>{});
    const expectedURL =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=c4f351490cb39722773a30b3347f2e0d&page=1';
    httpClientSpy.get.and.returnValue(of(expectedURL));
    service.getNowshowing(1);
  });

  it('should be created', async(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HomeService(<any>httpClientSpy, <any>{});
    const expectedURL =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=c4f351490cb39722773a30b3347f2e0d&page=1';
    httpClientSpy.get.and.returnValue(of(expectedURL));
    service.getGenres();
  }));
});
