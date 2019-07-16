import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HomePageComponent } from './home-page.component';
import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HomePageComponent', () => {
    let comp: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(() => {
        const homeServiceStub = {};
        TestBed.configureTestingModule({
            imports: [MaterialModule, FlexLayoutModule, SharedModule],
            declarations: [HomePageComponent],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
            providers: [{ provide: HomeService, useValue: homeServiceStub }]
        });
        fixture = TestBed.createComponent(HomePageComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('activeTabIndex defaults to: 0', () => {
        expect(comp.activeTabIndex).toEqual(0);
    });
    it('trackMovie if movie id is present', () => {
        const movie = {
            id: '297802'
        };
        expect(comp.trackMovie(0, movie)).toEqual(movie.id);
    });

    it('trackMovie else movie ID is null', () => {
        expect(comp.trackMovie('', '')).toBe(-1);
    });

    it('onTabChanged', () => {
        comp.tabChanged(1);
        expect(comp.activeTabIndex).toEqual(1);
    });

    it('getLanguage', () => {
        comp.getLanguage('en');
        expect(comp.selectedLanguage).toEqual('en');
    });

    it('getGenre', () => {
        comp.getGenre('action');
        expect(comp.selectedGenre).toEqual('action');
    });

    describe('Onint', () => {
        it('makes expected calls', () => {
          spyOn(comp, 'ngOnInit').and.callThrough();
          fixture.detectChanges();
          expect(comp.ngOnInit).toHaveBeenCalled();
        });
      });

});
