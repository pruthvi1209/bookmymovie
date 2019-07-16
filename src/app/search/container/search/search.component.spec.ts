import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let comp: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    const matDialogStub = {
      open: () => ({
        afterClosed: () => ({
          subscribe: () => ({})
        })
      })
    };
    const routerStub = {};
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MatDialog, useValue: matDialogStub }, { provide: Router, useValue: routerStub }]
    });
    fixture = TestBed.createComponent(SearchComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'openSearchPage');
      comp.ngOnInit();
    });
  });

  describe('openSearchPage', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(MatDialog);
      spyOn(matDialogStub, 'open');
      comp.openSearchPage();
    });
  });
});
