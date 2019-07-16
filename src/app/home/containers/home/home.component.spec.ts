import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeService } from '../../services/home.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        const storeStub = {
            select: () => ({
                subscribe: () => ({})
            })
        };
        const homeServiceStub = {
            getNowshowing: () => ({}),
            getTheaterList: () => ({}),
            getGenres: () => ({
                subscribe: () => ({})
            }),
            getUpcomingMovies: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ HomeComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: Store, useValue: storeStub },
                { provide: HomeService, useValue: homeServiceStub }
            ]
        });
        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('nowPlayingMoviesList defaults to: []', () => {
        expect(comp.nowPlayingMoviesList).toEqual([]);
    });

    it('upcomingMoviesList defaults to: []', () => {
        expect(comp.upcomingMoviesList).toEqual([]);
    });

    it('genresList defaults to: []', () => {
        expect(comp.genresList).toEqual([]);
    });

    it('theaterList defaults to: []', () => {
        expect(comp.theaterList).toEqual([]);
    });

    it('userPreference defaults to: []', () => {
        expect(comp.userPreference).toEqual([]);
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const storeStub = fixture.debugElement.injector.get(Store);
            const homeServiceStub: HomeService = fixture.debugElement.injector.get(HomeService);
            spyOn(storeStub, 'select');
            spyOn(homeServiceStub, 'getNowshowing');
            spyOn(homeServiceStub, 'getTheaterList');
            spyOn(homeServiceStub, 'getGenres');
            comp.ngOnInit();
            expect(storeStub.select).toHaveBeenCalled();
            expect(homeServiceStub.getNowshowing).toHaveBeenCalled();
            expect(homeServiceStub.getTheaterList).toHaveBeenCalled();
            expect(homeServiceStub.getGenres).toHaveBeenCalled();
        });
    });

});
