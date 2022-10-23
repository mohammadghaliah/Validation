import { Component, Input } from '@angular/core';
import {
  NgForm,
  AbstractControlDirective,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'validator',
  template: `
    <ul *ngIf="shouldShowErrors()" class="ul-en">
      <li *ngFor="let error of listOfErrors()">{{error}}</li>
    </ul>
    `,
  styleUrls: ['./validator.component.css'],
})
export class ValidatorComponent {
  @Input() control: AbstractControlDirective | AbstractControl;
  @Input() forms: NgForm;
  @Input() controlName: string;

  constructor() {}

  shouldShowErrors(): boolean {
    var showErrors = false;

    if (this.controlName) {
      this.control = this.forms.controls[this.controlName];
    }

    var control: any = this.control;
    if (this.control && this.control.errors) {
      if (
        (control.formDirective && control.formDirective.submitted) ||
        (this.forms && this.forms.submitted)
      ) {
        showErrors = this.control.invalid;
      } else {
        showErrors = this.control.dirty || this.control.touched;
      }
    }
    return showErrors;
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map((field) =>
      this.getMessage(field, this.control.errors[field])
    );
  }

  private getMessage(type: string, params: any) {
    if (params.messageKey != undefined) return 'hi1';
    else if (params.message != undefined) {
      return params.message;
    } else return type + this.getParam(params);
  }

  private getParam(params: any) {
    if (params.requiredLength != undefined) {
      return params.requiredLength;
    } else if (params.requiredPattern != undefined) {
      return params.requiredPattern;
    } else if (params.message != undefined) {
      return params.message;
    } else {
      return '';
    }
  }
}
