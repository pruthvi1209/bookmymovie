import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AdminguardService } from './adminguard.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
describe('AdminguardService', () => {
  let service: AdminguardService;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  const storeStub = {
    select: () => ({
      subscribe: () => ({})
    })
  };
  //   beforeEach(() => {
  //     service = new AdminguardService(null, null);
  //   });
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminguardService, { provide: Store, useValue: storeStub }, { provide: Router, useValue: router }]
    });
    service = TestBed.get(AdminguardService);
  });
  describe('AdminGuard Service - ', () => {
    it('can load instance', () => {
      expect(service.canActivate(<any>{}, <any>{})).toBe(false);
      expect(router.navigate).toHaveBeenCalledWith(['/home']);
    });
  });
});
