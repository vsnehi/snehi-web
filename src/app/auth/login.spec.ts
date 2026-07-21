import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls', () => {
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.controls.email).toBeTruthy();
    expect(component.loginForm.controls.password).toBeTruthy();
    expect(component.signupForm.controls.name).toBeTruthy();
    expect(component.signupForm.controls.confirmPassword).toBeTruthy();
  });

  it('should mark login form invalid when controls are empty', () => {
    component.loginForm.setValue({
      email: '',
      password: '',
      remember: false,
    });

    expect(component.loginForm.invalid).toBe(true);
  });

  it('should validate login email and password correctly', () => {
    component.loginForm.setValue({
      email: 'user@example.com',
      password: 'secret123',
      remember: true,
    });

    expect(component.loginForm.valid).toBe(true);
  });

  it('should switch to signup mode when creating a new account', () => {
    component.onCreateAccount();
    expect(component.mode).toBe('signup');
  });

  it('should detect signup password mismatch', () => {
    component.onCreateAccount();
    component.signupForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      password: 'secret123',
      confirmPassword: 'secret456',
      remember: false,
    });

    expect(component.signupForm.invalid).toBe(true);
    expect(component.signupMismatch).toBe(true);
  });
});
