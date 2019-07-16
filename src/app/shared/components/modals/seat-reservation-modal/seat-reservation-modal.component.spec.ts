import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { SeatReservationModalComponent } from './seat-reservation-modal.component';
import { MaterialModule } from '../../../../material.module';
import { TMDB_URLS } from '../../../config';

describe('SeatReservationModalComponent', () => {
  let comp: SeatReservationModalComponent;
  let fixture: ComponentFixture<SeatReservationModalComponent>;

  beforeEach(() => {
    const matDialogStub = {};
    const matDialogRefStub = {
      close: () => ({})
    };
    const routerStub = {
      navigate: () => ({})
    };

    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [SeatReservationModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: Router, useValue: routerStub },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(SeatReservationModalComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('imagesPath defaults to: TMDB_URLS.IMAGE_URL', () => {
    expect(comp.imagesPath).toEqual(TMDB_URLS.IMAGE_URL);
  });

  it('rows defaults to: ["A", "B","C","D"]', () => {
    expect(comp.rows).toEqual(['A', 'B', 'C', 'D']);
  });

  it('cols defaults to: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(comp.cols).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('reserved defaults to: ["A2", "A3","B5","C1","C2","D4"]', () => {
    expect(comp.reserved).toEqual(['A2', 'A3', 'B5', 'C1', 'C2', 'D4']);
  });

  it('selected defaults to: []', () => {
    expect(comp.selected).toEqual([]);
  });

  it('ticketPrice defaults to: 120', () => {
    expect(comp.ticketPrice).toEqual(120);
  });

  it('convFee defaults to: 30', () => {
    expect(comp.convFee).toEqual(30);
  });

  it('totalPrice defaults to: 0', () => {
    expect(comp.totalPrice).toEqual(0);
  });

  it('currency defaults to: Rs', () => {
    expect(comp.currency).toEqual('Rs');
  });

  describe('Onint', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'ngOnInit').and.callThrough();
      fixture.detectChanges();
      expect(comp.ngOnInit).toHaveBeenCalled();
      expect(comp.showBook).toBeFalsy();
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

  describe('getStatus', () => {
    it('makes expected calls', () => {
      comp.getStatus('A2');
      expect(comp.getStatus('A2')).toEqual('reserved');
    });
  });
  describe('getStatus- selected', () => {
    it('makes expected calls', () => {
      comp.selected = ['A1'];
      comp.getStatus('A1');
      expect(comp.getStatus('A1')).toEqual('selected');
    });
  });

  describe('SeatClicked-reserverd', () => {
    it('makes expected calls', () => {
      comp.selected = [];
      comp.seatClicked('B1');
      expect(comp.seatClicked('B1')).toBeUndefined();
    });
  });
  describe('SeatClicked- selected', () => {
    it('makes expected calls', () => {
      comp.selected = ['B3'];
      comp.seatClicked('A2');
      expect(comp.seatClicked('A2')).toBeUndefined();
    });
  });
  describe('showSelected', () => {
    it('makes expected calls', () => {
      comp.selected = ['B3'];
      comp.seatClicked('A2');
      expect(comp.seatClicked('A2')).toBeUndefined();
    });
  });
  describe('onCloseConfirm', () => {
    it('makes expected calls', () => {
      const matDialogRefStub = fixture.debugElement.injector.get(MatDialogRef);
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(matDialogRefStub, 'close');
      spyOn(routerStub, 'navigate');
      comp.onCloseConfirm();
      expect(matDialogRefStub.close).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('onCloseCancel', () => {
    it('makes expected calls', () => {
      const matDialogRefStub = fixture.debugElement.injector.get(MatDialogRef);
      spyOn(matDialogRefStub, 'close');
      comp.onCloseCancel();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
