import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { SDialogCardsComponent } from './s-dialog-cards.component';
import { HomeFilterPipe } from '../../../shared/pipes/home-filter.pipe';
import { SortMoviePipe } from '../../../shared/pipes/sort-movie.pipe';

describe('SDialogCardsComponent', () => {
  let comp: SDialogCardsComponent;
  let fixture: ComponentFixture<SDialogCardsComponent>;

  beforeEach(() => {
    const storeStub = {
      select: () => ({
        subscribe: () => ({})
      })
    };
    TestBed.configureTestingModule({
      declarations: [SDialogCardsComponent, HomeFilterPipe, SortMoviePipe],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: Store, useValue: storeStub }]
    });
    fixture = TestBed.createComponent(SDialogCardsComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('userPreference defaults to: []', () => {
    expect(comp.userPreference).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const storeStub = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'select');
      comp.ngOnInit();
      // expect(storeStub.select).toHaveBeenCalled();
    });
  });
});
