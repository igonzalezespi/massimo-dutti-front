import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Validation } from '../validation.interface';

/*
  Dado un formulario y un array de validaciones, mostrará el mensaje correspondiente debajo del input
  También puede recibir el formulario, nombre del control y validaciones para las validaciones de un solo control
 */

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() form: FormGroup;

  @Input() controlName: string;

  @Input() validations: Validation[];

  control: AbstractControl;

  ngOnInit() {
    if (this.controlName) {
      this.control = this.form.controls[this.controlName];
    }
  }
}
