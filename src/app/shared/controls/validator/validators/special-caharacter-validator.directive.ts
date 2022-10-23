// import { Directive } from '@angular/core';
// import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';
// import { TranslationService } from 'angular-l10n';

// @Directive({
//     selector: '[special-caharacter-validator]',
//     providers: [{ provide: NG_VALIDATORS, useExisting: SpecialcaharacterDirective, multi: true }]
// })

// export class SpecialcaharacterDirective implements Validator {
//     constructor(public translation: TranslationService) {
//     }

//     validate(c: FormControl): ValidationErrors {
//         const value: string = c.value;
//         var specialcaharacterDirectiveRegex = /[!@#$%^&*(),.?":{}|<>]/i;

//         if (!value) { return; }

//         const message = {
//             'special-caharacter-validator': {
//                 'message': this.translation.translate('validators.specialCharsValidation')
//             }
//         };
//         return specialcaharacterDirectiveRegex.test(value) ? message : null;
//     }
// }
import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[special-caharacter-validator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SpecialcaharacterDirective,
      multi: true,
    },
  ],
})
export class SpecialcaharacterDirective implements Validator {
  constructor() {}

  validate(c: FormControl): ValidationErrors {
    const value: string = c.value;
    var specialcaharacterDirectiveRegex = /[!@#$%^&*(),.?":{}|<>]/i;

    if (!value) {
      return;
    }

    const message = {
      'special-caharacter-validator': {
        message: 'validators.specialCharsValidation',
      },
    };
    return specialcaharacterDirectiveRegex.test(value) ? message : null;
  }
}
