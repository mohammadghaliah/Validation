import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[password-pattern-validator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordPatternDirective,
      multi: true,
    },
  ],
})
export class PasswordPatternDirective implements Validator {
  constructor() {}

  validate(c: FormControl): ValidationErrors {
    const value: string = c.value;
    var codeDirectiveRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).*$/;

    if (!value) {
      return;
    }

    const message = {
      'password-pattern-validator': {
        message: 'validators.specialCharsValidation1',
      },
    };
    return codeDirectiveRegex.test(value) ? null : message;
  }
}
