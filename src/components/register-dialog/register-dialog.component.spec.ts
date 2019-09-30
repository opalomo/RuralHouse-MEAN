import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDialogComponent } from './register-dialog.component';

describe('RegistroComponent', () => {
  let component: RegisterDialogComponent;
  let fixture: ComponentFixture<RegisterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
