import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from 'angular-6-social-login';
import { LoginService } from '../../services/login.service';
import { UserDetailService } from '../../services/userDetails.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UiService } from '../../../shared/ui-service.service';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const fakeUser = [{ uid: 1234 }];
  beforeEach(() => {
    const matDialogStub = {
      open: () => ({
        afterClosed: () => ({
          subscribe: () => ({})
        })
      })
    };
    const authServiceStub = {
      signIn: () => ({
        then: () => ({
          catch: () => ({})
        })
      }),
      signOut: () => ({
        then: () => ({})
      })
    };
    const loginServiceStub = {
      getUserData: () => ({
        subscribe: () => ({})
      })
    };
    const userDetailServiceStub = {
      addNewUser: () => ({})
    };
    const routerStub = {
      navigate: () => ({})
    };

    const storeStub = {
      dispatch: () => ({}),
      select: () => ({
        subscribe: () => ({})
      })
    };
    const uiServiceStub = {
      showMessage: () => ({})
    };
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule],
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: AuthService, useValue: authServiceStub },
        { provide: LoginService, useValue: loginServiceStub },
        { provide: UserDetailService, useValue: userDetailServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: Store, useValue: storeStub },
        { provide: UiService, useValue: uiServiceStub }
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('authFlag defaults to: false', () => {
    expect(comp.authFlag).toBeFalsy();
  });

  it('signUpFlag defaults to: false', () => {
    expect(comp.signUpFlag).toBeFalsy();
  });
  const authDetails = { role: 'Admin' };
  it('validate', () => {
    comp.validate();
    if (authDetails) {
      comp.authFlag = true;
      expect(comp.authFlag).toBeTruthy();
      if (authDetails.role === 'Admin') {
        comp.adminFlag = true;
        expect(comp.adminFlag).toBeTruthy();
      }
    } else {
      expect(comp.authFlag).toBeFalsy();
    }
  });

  describe('loadProfile', () => {
    it('loadProfile- makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate');
      comp.loadProfile();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('ngOnInit-makes expected calls', () => {
      const storeStub = fixture.debugElement.injector.get(Store);
      const user = [{ uid: 1234 }];
      spyOn(storeStub, 'select').and.returnValue(of([fakeUser]));
      comp.ngOnInit();
      // tslint:disable-next-line:no-shadowed-variable
      storeStub.select().subscribe(user => {
        expect(user).toEqual([fakeUser]);
        comp.validate();
      });
    });
  });

  describe('openSearchPage', () => {
    it('openSearchPage-makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate');
      comp.openSearchPage();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
  it('socialSignOut', () => {
    const socialStub = fixture.debugElement.injector.get(AuthService);
    const socialPlatform = 'google';
    const data = 'test';
    comp.socialSignOut(socialPlatform);
    fixture.detectChanges();
    spyOn(socialStub, 'signOut').and.returnValue(of([data]));
  });
  it('socialSignIn', () => {
    const socialPlatform = 'google';
    comp.socialSignIn(socialPlatform);
    fixture.detectChanges();
  });
});
