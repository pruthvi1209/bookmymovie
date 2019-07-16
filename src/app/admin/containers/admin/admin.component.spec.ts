import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Store } from '@ngrx/store';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../../../material.module';
import { of } from 'rxjs';

describe('AdminComponent', () => {
  let comp: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  const fakeAdminTheater = { id: 1, name: 'Mall' };

  beforeEach(() => {
    const adminServiceStub = {
      newTheater: () => ({})
    };
    const storeStub = {
      select: () => ({
        subscribe: () => ({})
      })
    };
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [AdminComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: AdminService, useValue: adminServiceStub }, { provide: Store, useValue: storeStub }]
    });
    fixture = TestBed.createComponent(AdminComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const storeStub = fixture.debugElement.injector.get(Store);
      const theater = { id: 1, name: 'Mall' };
      const spy = spyOn(storeStub, 'select').and.returnValue(of([fakeAdminTheater]));
      comp.ngOnInit();
      // tslint:disable-next-line:no-shadowed-variable
      storeStub.select().subscribe(theater => {
        expect(theater).toEqual([fakeAdminTheater]);
      });
    });
  });

  it('can load instance - AdminTheater', () => {
    const FD = new FormData();
    FD.append('id', '1');
    FD.append('name', 'theater');
    comp.addTheater(FD);
  });
});
