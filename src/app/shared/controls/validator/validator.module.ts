import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorComponent } from './validator.component';
import { PasswordPatternDirective } from './validators/password-pattern-validator.directive';
import { SpecialcaharacterDirective } from './validators/special-caharacter-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MobileNumberDirective } from './validators/mobile-number.directive';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { WebSiteDirective } from './validators/web-site-validator.directive';

@NgModule({
  declarations: [
    ValidatorComponent,
    PasswordPatternDirective,
    SpecialcaharacterDirective,
    EmailValidatorDirective,
    MobileNumberDirective,
    UrlValidatorDirective,
    WebSiteDirective,
  ],
  imports: [CommonModule],
  exports: [
    ValidatorComponent,
    PasswordPatternDirective,
    SpecialcaharacterDirective,
    EmailValidatorDirective,
    MobileNumberDirective,
    UrlValidatorDirective,
    WebSiteDirective,
  ],
})
export class ValidatorModule {}
