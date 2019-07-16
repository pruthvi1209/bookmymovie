import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ChangeShowComponent } from './change-show.component';
import { MaterialModule } from '../../../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('ChangeShowComponent', () => {
  let comp: ChangeShowComponent;
  let fixture: ComponentFixture<ChangeShowComponent>;
  const movieInput: FormControl = new FormControl();
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
    const adminServiceStub = {
      searchMovie: () => ({
        subscribe: () => ({})
      }),
      saveNowPlaying: () => ({})
    };
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule],
      declarations: [ChangeShowComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: AdminService, useValue: adminServiceStub },
        { provide: MatDialog, useValue: matDialogStub },
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(ChangeShowComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('nowShowing defaults to: []', () => {
    expect(comp.nowShowing).toEqual([]);
  });

  it('nowPlaying defaults to: []', () => {
    expect(comp.nowPlaying).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('movieInput', () => {
      const valueInput = 'USA';
      spyOn(movieInput, 'valueChanges').and.returnValue(of(valueInput));
      comp.movieResult = { results: { movie: 'USA AMerica' } };
      const adminServiceStub: AdminService = fixture.debugElement.injector.get(AdminService);
      const fakeData = { results: { movie: 'USA AMerica' } };
      spyOn(adminServiceStub, 'searchMovie').and.returnValue(of(fakeData));
      comp.ngOnInit();
      // tslint:disable-next-line:no-shadowed-variable
      comp.movieInput.valueChanges.subscribe(valueInput => {
        // expect([valueInput]).toEqual(valueInput);
        // tslint:disable-next-line:no-shadowed-variable
        adminServiceStub.searchMovie(valueInput).subscribe(fakeData => {
          expect(comp.movieResult).toEqual(fakeData);
        });
      });
    });
  });

  describe('save', () => {
    it('makes expected calls', () => {
      const adminServiceStub: AdminService = fixture.debugElement.injector.get(AdminService);
      spyOn(adminServiceStub, 'saveNowPlaying');
      comp.save();
      expect(adminServiceStub.saveNowPlaying).toHaveBeenCalled();
    });
  });

  describe('Cancel', () => {
    it('makes expected calls', () => {
      comp.cancel();
      expect(comp.nowShowing).toEqual([]);
    });
  });
  describe('addMovie', () => {
    it('makes expected calls', () => {
      const movie = { name: 'USA Independence', id: '1234' };
      comp.addMovie(movie);
      expect(comp.nowShowing).toEqual(['USA Independence']);
      expect(comp.nowPlaying).toEqual(['1234']);
    });
  });
});
