import { ComponentFixture, TestBed, tick, flush } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import { UserDetailService } from 'src/app/core/services/userDetails.service';
import { AppComponent } from './app.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const swUpdateStub = {
      isEnabled: {},
      available: {
        subscribe: () => ({
          message: 'New version available. Update to new Version ?',
          action: 'UPDATE'
        })
      }
    };
    const matSnackBarStub = {
      open: () => ({
        onAction: () => ({
          subscribe: () => ({})
        })
      })
    };
    const userDetailServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: SwUpdate, useValue: swUpdateStub },
        { provide: MatSnackBar, useValue: matSnackBarStub },
        { provide: UserDetailService, useValue: userDetailServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('title defaults to: book-my-movie', () => {
    expect(comp.title).toEqual('book-my-movie');
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const matSnackBarStub: MatSnackBar = fixture.debugElement.injector.get(MatSnackBar);
      spyOn(matSnackBarStub, 'open');
      comp.ngOnInit();
      fixture.detectChanges();
      // expect(matSnackBarStub.open).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const swUpdateStub: SwUpdate = fixture.debugElement.injector.get(SwUpdate);
      const spy = spyOn(swUpdateStub, 'available').and.returnValue(of([{}]));
      comp.ngOnInit();
      fixture.detectChanges();
      swUpdateStub.available.subscribe(() => {});
    });
  });
});
