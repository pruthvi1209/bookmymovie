import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaymentBookingComponent } from './payment-booking.component';
import { MaterialModule } from '../../../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PaymentBookingComponent', () => {
  let comp: PaymentBookingComponent;
  let fixture: ComponentFixture<PaymentBookingComponent>;

  beforeEach(() => {
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
    const activatedRouteStub = {
      snapshot: {
        params: {
          movieTitle: {},
          theatre: {},
          time: {},
          seat: {},
          total: {}
        }
      }
    };
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule],
      declarations: [PaymentBookingComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(PaymentBookingComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  describe('Onint', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'ngOnInit').and.callThrough();
      fixture.detectChanges();
    });
  });
  describe('openConfirmDialog', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(MatDialog);
      spyOn(matDialogStub, 'open');
      comp.openConfirmDialog();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
