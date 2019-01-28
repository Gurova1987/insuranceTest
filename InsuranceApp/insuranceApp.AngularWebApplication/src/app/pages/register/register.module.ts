import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
      ThemeModule,
      RouterModule,
      HttpModule,
  ],
  declarations: [
      RegisterComponent
  ],
})
export class RegisterModule { }
