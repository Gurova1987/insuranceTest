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
import { AuthGuard } from '../auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'customers',
      component: CustomerListComponent,
      canActivate: [AuthGuard]
    },
    {
        path: 'customers/create',
        component: CustomerAddComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'customers/edit/:id',
        component: CustomerEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'insurance',
        component: InsuranceListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'insurance/create',
        component: InsuranceAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'insurance/edit/:id',
        component: InsuranceEditComponent,
        canActivate: [AuthGuard]
    },
    {
      path: '',
      redirectTo: 'customers',
      pathMatch: 'full',
      canActivate: [AuthGuard]
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
