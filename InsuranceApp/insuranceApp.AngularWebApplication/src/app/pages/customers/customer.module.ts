import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  imports: [
      ThemeModule,
      RouterModule,
      HttpModule
  ],
  declarations: [
      CustomerListComponent,
      CustomerAddComponent,
      CustomerEditComponent
  ],
})
export class CustomerModule { }
