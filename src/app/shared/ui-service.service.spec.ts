import { TestBed } from '@angular/core/testing';
import { MaterialModule } from './../material.module';
import { MatSnackBar, } from '@angular/material';
import { UiService } from './ui-service.service';

describe('UiServiceService', () => {
  // tslint:disable-next-line:prefer-const
  let snackBar: MatSnackBar;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MaterialModule
    ],
    providers: [MatSnackBar]
  }));

  it('should be created', () => {
    const service: UiService = TestBed.get(UiService);
    expect(service).toBeTruthy();
  });
});
