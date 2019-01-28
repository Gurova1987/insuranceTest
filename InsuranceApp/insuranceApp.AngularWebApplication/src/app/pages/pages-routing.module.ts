import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { InsuranceListComponent } from './insurances/insurance-list/insurance-list.component';
import { InsuranceAddComponent } from './insurances/insurance-add/insurance-add.component';
import { InsuranceEditComponent } from './insurances/insurance-edit/insurance-edit.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'customers',
      component: CustomerListComponent
    },
    {
        path: 'customers/create',
        component: CustomerAddComponent
    },
    {
        path: 'customers/edit/:id',
        component: CustomerEditComponent
    },
    {
        path: 'insurance',
        component: InsuranceListComponent
    },
    {
        path: 'insurance/create',
        component: InsuranceAddComponent
    },
    {
        path: 'insurance/edit',
        component: InsuranceEditComponent
    },
    {
      path: '',
      redirectTo: 'customers',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
