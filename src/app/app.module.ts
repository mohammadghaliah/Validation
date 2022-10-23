import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValidatorModule } from './shared/controls/validator/validator.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ValidatorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
