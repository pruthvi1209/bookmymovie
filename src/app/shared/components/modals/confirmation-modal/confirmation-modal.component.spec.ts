import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { Router } from '@angular/router';

describe('ConfirmationModalComponent', () => {
  let comp: ConfirmationModalComponent;
  let fixture: ComponentFixture<ConfirmationModalComponent>;

  beforeEach(() => {
    const matDialogRefStub = {
      close: () => ({})
    };
    const routerStub = {
      navigate: () => ({})
    };
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ConfirmationModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: Router, useValue: routerStub }
      ]
    });
    fixture = TestBed.createComponent(ConfirmationModalComponent);
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

  describe('onCloseConfirm', () => {
    it('makes expected calls', () => {
      const matDialogRefStub = fixture.debugElement.injector.get(MatDialogRef);
      spyOn(matDialogRefStub, 'close');
      comp.onCloseConfirm();
      // expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
