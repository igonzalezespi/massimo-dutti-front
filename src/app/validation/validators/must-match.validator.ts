import { AbstractControl, ValidatorFn } from '@angular/forms';

// Comprueba que dos campos sean iguales
export const mustmatch = (controlName: string, matchingControlName: string): ValidatorFn => (form: AbstractControl) => {
  const control = form.get(controlName);
  const matchingControl = form.get(matchingControlName);

  if (control.value !== matchingControl.value) {
    return { mustmatch: true };
  }
  return null;
};
