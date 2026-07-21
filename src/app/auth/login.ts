import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./login.scss'],
})
export class Login {
  private readonly fb = inject(FormBuilder);
  submitted = false;
  mode: 'login' | 'signup' = 'login';
  message = '';
  errorMessage = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false],
  });

  private passwordMatch(group: any) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  signupForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      remember: [false],
    },
    { validators: this.passwordMatch },
  );

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get signupName() {
    return this.signupForm.get('name');
  }

  get signupEmail() {
    return this.signupForm.get('email');
  }

  get signupPassword() {
    return this.signupForm.get('password');
  }

  get signupConfirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  get signupMismatch() {
    // Report mismatch when the validator marks it, tests expect immediate detection
    return !!this.signupForm.errors?.['mismatch'];
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const payload = this.loginForm.value;
    console.log('Login payload:', payload);
    this.message = 'Logged in successfully (demo).';
    this.errorMessage = '';
  }

  onCreateAccount() {
    this.mode = 'signup';
    this.submitted = false;
    this.message = '';
    this.errorMessage = '';
    this.signupForm.reset({ remember: false });
  }

  onBackToLogin() {
    this.mode = 'login';
    this.submitted = false;
    this.message = '';
    this.errorMessage = '';
  }

  async onSignup() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    const payload = {
      name: this.signupName?.value,
      email: this.signupEmail?.value,
      password: this.signupPassword?.value,
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      let result: any;
      const contentType = response.headers.get('content-type') ?? '';
      if (contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || 'Server returned an invalid response.');
      }

      if (!response.ok) {
        throw new Error(result?.error || 'Signup failed');
      }

      this.message = result.message || 'Account created and cached successfully.';
      this.errorMessage = '';

      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('user-updated', {
            detail: { name: this.signupName?.value },
          }),
        );
      }

      this.signupForm.reset({ remember: false });
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'Unable to create account.';
      this.message = '';
    }
  }
}
