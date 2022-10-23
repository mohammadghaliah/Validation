import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[web-site-validator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: WebSiteDirective, multi: true },
  ],
})
export class WebSiteDirective implements Validator {
  constructor() {}

  validate(c: FormControl): ValidationErrors {
    const value: string = c.value;
    var webSiteRegex =
      /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/i;

    if (!value) {
      return;
    }

    const message = {
      'web-site-validator': {
        message: 'validators.correctWebSite',
      },
    };
    return webSiteRegex.test(value) ? null : message;
  }
}
