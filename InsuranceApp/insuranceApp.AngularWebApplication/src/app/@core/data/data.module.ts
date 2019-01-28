import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { CustomerService } from './customers.service';
import { ConfigService } from './config.service';
import { CoverageTypeService } from './coverageTypes.service';
import { RiskTypeService } from './riskTypes.service';
import { InsuranceService } from './insurance.service';

const SERVICES = [
    UserService,
    CustomerService,
    ConfigService,
    CoverageTypeService,
    RiskTypeService,
    InsuranceService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
