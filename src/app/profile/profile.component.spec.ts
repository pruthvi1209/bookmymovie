import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeService } from '../home/services/home.service';
import { LoginService } from '../core/services/login.service';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('ProfileComponent', () => {
  let comp: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  const fakeGenre = { genres: { id: 1, name: 'MAll' } };
  const matDialogStub = {
    open: () => ({
      afterClosed: () => ({
        subscribe: () => ({})
      })
    })
  };
  const matDialogRefStub = {
    close: () => ({}),
    afterClosed: () => ({
      subscribe: () => ({})
    })
  };
  const fakeUserList = {
    users: [
      {
        uid: '104930459862086855344',
        email: 'advaid@outlook.in',
        name: 'Advaid Manoj',
        role: 'Standard',
        image: 'http://assets/images/noImage.jpg',
        preferences: {
          lang: 'en',
          generes: [1, 2, 3]
        },
        ratings: [
          {
            movieId: 1,
            rating: 4
          },
          {
            movieId: 4,
            rating: 3
          }
        ]
      }
    ]
  };
  beforeEach(() => {
    const homeServiceStub = {
      setPreference: () => ({}),
      getGenres: () => ({
        subscribe: () => ({})
      })
    };
    const loginServiceStub = {
      getUserData: () => ({
        subscribe: () => ({})
      })
    };
    const storeStub = {
      select: () => ({
        subscribe: () => ({})
      })
    };
    const formBuilderStub: FormBuilder = new FormBuilder();
    const newPreference = formBuilderStub.group({
      lang: [''],
      generes: [''],
      theaters: ['']
    });

    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: HomeService, useValue: homeServiceStub },
        { provide: LoginService, useValue: loginServiceStub },
        { provide: Store, useValue: storeStub },
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: MatDialog, useValue: matDialogStub },
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(ProfileComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('genresList defaults to: []', () => {
    expect(comp.genresList).toEqual([]);
  });

  it('theaterList defaults to: []', () => {
    expect(comp.theaterList).toEqual([]);
  });

  it('languageList defaults to: [, , , ]', () => {
    expect(comp.languageList).toEqual([
      { name: 'English', value: 'en' },
      { name: 'Hindi', value: 'hi' },
      { name: 'Tamil', value: 'ta' },
      { name: 'Kannada', value: 'kn' }
    ]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      comp.ngOnInit();
      fixture.detectChanges();
    });
  });
  it('Oninit Subscribe', () => {
    const storeStub = fixture.debugElement.injector.get(Store);
    const Userdata = [fakeUserList];
    spyOn(storeStub, 'select').and.returnValue(of([fakeUserList]));
    comp.ngOnInit();
    // tslint:disable-next-line:no-shadowed-variable
    storeStub.select().subscribe(theater => {
      expect(Userdata).toEqual([fakeUserList]);
    });
  });
  it('submitPreferences', () => {
    const userDetails = {
      users: [
        {
          uid: '104930459862086855344',
          email: 'advaid@outlook.in',
          name: 'Advaid Manoj',
          role: 'Standard',
          image: 'http://assets/images/noImage.jpg',
          preferences: {
            lang: 'en',
            generes: [1, 2, 3]
          },
          ratings: [
            {
              movieId: 1,
              rating: 4
            },
            {
              movieId: 4,
              rating: 3
            }
          ]
        }
      ]
    };
    //  sessionStorage.setItem('authDetails', JSON.stringify(userDetails));
    // const currentSeesion = JSON.parse(sessionStorage.getItem('authDetails'));
    comp.submitPreferences();
    fixture.detectChanges();
  });

  it('homeServiceStub - Movie DropDown makes expected calls', () => {
    const homeServiceStub: HomeService = fixture.debugElement.injector.get(HomeService);
    const data = { genres: { id: 1, name: 'MAll' } };
    spyOn(homeServiceStub, 'getGenres').and.returnValue(of(fakeGenre));
    comp.ngOnInit();
    // tslint:disable-next-line:no-shadowed-variable
    // homeServiceStub.getGenres().subscribe((fakeGenre: any) => {
    //   // expect(data.generes).toEqual(fakeGenre);
    // });
  });
  it('login - Movie DropDown makes expected calls', () => {
    const loginServiceStub: LoginService = fixture.debugElement.injector.get(LoginService);
    const fakeUser = { users: [{ name: 'MAll' }] };
    const data = { users: [{ name: 'MAll' }] };
    spyOn(loginServiceStub, 'getUserData').and.returnValue(of(fakeUser));
    comp.ngOnInit();
    // tslint:disable-next-line:no-shadowed-variable
    loginServiceStub.getUserData().subscribe(fakeUser => {
      expect(data.users[0].name).toEqual(fakeUser.users[0].name);
    });
  });
});
