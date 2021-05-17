import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture, fakeAsync, flush, TestBed, waitForAsync,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const dummyForm = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.form.invalid).toBeTruthy();
  });

  it('should be invalid when firstName length is less than 3', () => {
    component.form.setValue({
      ...dummyForm,
      firstName: 'ab',
    });
    expect(component.form.get('firstName').errors.minlength).toBeTruthy();
  });

  it('should be invalid when lastName length is less than 3', () => {
    component.form.setValue({
      ...dummyForm,
      lastName: 'ab',
    });
    expect(component.form.get('lastName').errors.minlength).toBeTruthy();
  });

  it('should be invalid when username length is less than 3', () => {
    component.form.setValue({
      ...dummyForm,
      username: 'ab',
    });
    expect(component.form.get('username').errors.minlength).toBeTruthy();
  });

  it('should be invalid when email length is less than 6', () => {
    component.form.setValue({
      ...dummyForm,
      email: 'abcde',
    });
    expect(component.form.get('email').errors.minlength).toBeTruthy();
  });

  it('should be invalid when password length is less than 6', () => {
    component.form.setValue({
      ...dummyForm,
      password: 'abcde',
    });
    expect(component.form.get('password').errors.minlength).toBeTruthy();
  });

  it('should register service when the form is valid', fakeAsync(() => {
    const authService = TestBed.inject(AuthService);
    const authSpy = jest.spyOn(authService, 'register');

    component.form.setValue({
      username: 'bbbbbb',
      password: 'bbbbbb',
      firstName: 'bbbbbb',
      lastName: 'bbbbbb',
      email: 'bbb@bbb.com',
    });
    component.registerUser();
    flush();
    expect(authSpy).toHaveBeenCalled();
  }));
});
