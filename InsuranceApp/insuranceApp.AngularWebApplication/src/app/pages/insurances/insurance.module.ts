import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ThemeModule } from '../../@theme/theme.module';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceAddComponent } from './insurance-add/insurance-add.component';
import { InsuranceEditComponent } from './insurance-edit/insurance-edit.component';

@NgModule({
  imports: [
      ThemeModule,
      RouterModule
  ],
  declarations: [
      InsuranceListComponent,
      InsuranceAddComponent,
      InsuranceEditComponent
  ],
})
export class InsuranceModule { }
