import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { PreBookingComponent } from './pre-booking.component';

describe('PreBookingComponent', () => {
  let comp: PreBookingComponent;
  let fixture: ComponentFixture<PreBookingComponent>;

  beforeEach(() => {
    const matDialogRefStub = {
      close: () => ({})
    };
    const matDialogStub = {};
    TestBed.configureTestingModule({
      declarations: [PreBookingComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MatDialog, useValue: matDialogStub },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(PreBookingComponent);
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
  describe('onNoClick', () => {
    it('makes expected calls', () => {
      const matDialogRefStub = fixture.debugElement.injector.get(MatDialogRef);
      spyOn(matDialogRefStub, 'close');
      comp.onNoClick();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
