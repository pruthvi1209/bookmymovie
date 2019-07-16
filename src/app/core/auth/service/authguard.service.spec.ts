import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './authguard.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('AuthGuard', () => {
    let service: AuthGuard;
    const router = {
        navigate: jasmine.createSpy('navigate')
    };
    const storeStub = {
        select: () => ({
            subscribe: () => ({})
        })
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard, { provide: Store, useValue: storeStub }, { provide: Router, useValue: router }]
        });
        service = TestBed.get(AuthGuard);
    });

    it('can load instance- canActivate', () => {
        expect(service.canActivate(<any>{}, <any>{})).toBe(false);
        expect(router.navigate).toHaveBeenCalledWith(['/home']);
    });
    it('can load instance-canLoad', () => {
        expect(service.canLoad(<any>{})).toBe(false);
        expect(router.navigate).toHaveBeenCalledWith(['/home']);
    });
});
