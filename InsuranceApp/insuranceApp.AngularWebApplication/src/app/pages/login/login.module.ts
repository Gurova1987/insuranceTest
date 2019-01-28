import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
      ThemeModule,
      RouterModule,
      HttpModule,
  ],
  declarations: [
      LoginComponent
  ],
})
export class LoginModule { }
