import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SocialFeedsComponent } from './social-feeds.component';

describe('SocialFeedsComponent', () => {
  let comp: SocialFeedsComponent;
  let fixture: ComponentFixture<SocialFeedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialFeedsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SocialFeedsComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });
  describe('Onint', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'ngOnInit').and.callThrough();
      fixture.detectChanges();
      expect(comp.ngOnInit).toHaveBeenCalled();
    });
  });
});
