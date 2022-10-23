import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[url-validator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true },
  ],
})
export class UrlValidatorDirective implements Validator {
  constructor() {}

  validate(c: FormControl): ValidationErrors {
    const value: string = c.value;
    var urlRegex =
      /\b(((http(s)?):\/\/)(www\.)?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/g;

    if (!value) {
      return;
    }

    const message = {
      'url-validator': {
        message: 'validators.wrongUrlFormat',
      },
    };
    return urlRegex.test(value) ? null : message;
  }
}
