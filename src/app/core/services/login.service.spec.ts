import { TestBed, getTestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { observable, of } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [LoginService, HttpClient, HttpTestingController]
    });
    service = TestBed.get(LoginService);
  });

  it('can load instance', () => {
    // let blogService: LoginService = getTestBed().get(LoginService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new LoginService(<any>httpClientSpy);
    const expectedURL = 'http://localhost:3000/userDetails';
    httpClientSpy.get.and.returnValue(of(expectedURL));
    service.getUserData();
    // expect(service.getUserData()).toHaveBeenCalledWith('http://localhost:3000/userDetails');
  });
});
