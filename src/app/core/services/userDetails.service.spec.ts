import { TestBed } from '@angular/core/testing';
import { UserDetailService } from './userDetails.service';
import { Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from 'selenium-webdriver/http';
import { of } from 'rxjs';

describe('UserDetailService', () => {
  let service: UserDetailService;
  let httpClientSpy: { get: jasmine.Spy };
  const storeStub = {
    select: () => ({
      subscribe: () => ({})
    })
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [UserDetailService, { provide: HttpClient, useValue: {} }, { provide: Store, useValue: storeStub }]
    });
    service = TestBed.get(UserDetailService);
  });

  it('getUserDetailData ', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserDetailService(<any>httpClientSpy, <any>{});
    service.getUserDetailData();
  });
  it('can load instance -addNewUser ', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserDetailService(<any>httpClientSpy, <any>{});
    const expectedURL = 'http://localhost:3000/userDetails';
    httpClientSpy.get.and.returnValue(of(expectedURL));
    service.addNewUser({});
  });
});
