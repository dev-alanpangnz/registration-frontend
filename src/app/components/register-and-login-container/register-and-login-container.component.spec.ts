import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAndLoginContainerComponent } from './register-and-login-container.component';

describe('RegisterAndLoginContainerComponent', () => {
  let component: RegisterAndLoginContainerComponent;
  let fixture: ComponentFixture<RegisterAndLoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAndLoginContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAndLoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
