import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
      CustomerListComponent,
      CustomerAddComponent,
      CustomerEditComponent
  ],
})
export class CustomerModule { }
