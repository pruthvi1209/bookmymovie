import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddTheaterComponent } from './add-theater.component';
import { MaterialModule } from '../../../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('AddTheaterComponent', () => {
  let comp: AddTheaterComponent;
  let fixture: ComponentFixture<AddTheaterComponent>;
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
  beforeEach(() => {
    const formBuilderStub: FormBuilder = new FormBuilder();
    const newTheater = formBuilderStub.group({
      tid: '123',
      name: 'america',
      city: 'usa',
      gLocation: '',
      capacity: '3'
    });
    // const formBuilderStub = {};
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MaterialModule],
      declarations: [AddTheaterComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: MatDialog, useValue: matDialogStub },
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(AddTheaterComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      comp.ngOnInit();
      fixture.detectChanges();
    });
  });
  describe('OnSubmit', () => {
    it('makes expected calls', () => {
      expect(comp.newTheater.valid).toBeFalsy();
      comp.onSubmit();
      fixture.detectChanges();
      comp.addTheater.emit(comp.newTheater);
    });
  });
});
