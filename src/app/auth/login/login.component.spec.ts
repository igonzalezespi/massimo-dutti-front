import {
  ComponentFixture, fakeAsync, flush, TestBed, waitForAsync,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const dummyForm = {
    username: '',
    password: '',
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.form.invalid).toBeTruthy();
  });

  it('should be invalid when username length is less than 3', () => {
    component.form.setValue({
      ...dummyForm,
      username: 'ab',
    });
    expect(component.form.get('username').errors.minlength).toBeTruthy();
  });

  it('should be invalid when password length is less than 6', () => {
    component.form.setValue({
      ...dummyForm,
      password: 'abcde',
    });
    expect(component.form.get('password').errors.minlength).toBeTruthy();
  });

  it('should call login service when the form is valid', fakeAsync(() => {
    const authService = TestBed.inject(AuthService);
    const authSpy = jest.spyOn(authService, 'login');

    component.form.setValue({
      username: 'aaaaaa',
      password: 'aaaaaa',
    });
    component.loginUser();
    flush();
    expect(authSpy).toHaveBeenCalled();
  }));
});
