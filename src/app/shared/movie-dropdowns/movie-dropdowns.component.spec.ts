import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeService } from 'src/app/home/services/home.service';
import { MovieDropdownsComponent } from './movie-dropdowns.component';
import { MaterialModule } from 'src/app/material.module';
import { of } from 'rxjs';
import { FormControl } from '@angular/forms';

describe('MovieDropdownsComponent', () => {
  let comp: MovieDropdownsComponent;
  let fixture: ComponentFixture<MovieDropdownsComponent>;
  // tslint:disable-next-line:prefer-const
  let languageSelector: FormControl;
  // tslint:disable-next-line:prefer-const
  let generSelector: FormControl;
  const fakeGenre = { id: 1, name: 'Drama' };
  beforeEach(() => {
    const homeServiceStub = {
      getGenres: () => ({
        subscribe: () => ({})
      })
    };
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MovieDropdownsComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: HomeService, useValue: homeServiceStub }]
    });
    fixture = TestBed.createComponent(MovieDropdownsComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('genresList defaults to: []', () => {
    expect(comp.genresList).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const homeServiceStub: HomeService = fixture.debugElement.injector.get(HomeService);
      const genre = [{ id: 1, name: 'Drama' }];
      spyOn(homeServiceStub, 'getGenres').and.returnValue(of([fakeGenre]));
      comp.ngOnInit();
      // tslint:disable-next-line:no-shadowed-variable
      // homeServiceStub.getGenres().subscribe((fakeGenre: any) => {
      //   expect(genre).toEqual([fakeGenre]);
      // });
    });
  });
  describe('languageChanged', () => {
    it('makes expected calls', () => {
      const fakevalue = { lang: { name: 'en', id: 1 } };
      spyOn(comp.languageSelector, 'valueChanges').and.callThrough();
      comp.ngOnInit();
      comp.languageSelector.valueChanges.subscribe(() => {});
    });
  });
});
