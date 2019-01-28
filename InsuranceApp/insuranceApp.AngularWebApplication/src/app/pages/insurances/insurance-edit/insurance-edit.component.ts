import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { InsuranceService } from '../../../@core/data/insurance.service';
import { RiskTypeService } from '../../../@core/data/riskTypes.service';
import { CoverageTypeService } from '../../../@core/data/coverageTypes.service';
import { ConfigService } from '../../../@core/data/config.service';
import { ConfigSite } from '../../../@core/models/genericModels';

@Component({
    selector: 'app-insurance-edit',
    styleUrls: ['./insurance-edit.component.scss'],
    templateUrl: './insurance-edit.component.html'
})

export class InsuranceEditComponent implements OnInit {

    model: any = {}
    riskTypes: any = [];
    coverageTypes: any = [];
    configData: ConfigSite;

    constructor(private http: Http,
        private insuranceService: InsuranceService,
        private riskTypeService: RiskTypeService,
        private coverageTypeService: CoverageTypeService,
        private config: ConfigService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.config.GetConfig()
            .subscribe(
                data => {
                    this.configData = data;
                    this.getRiskTypes();
                    this.getCoverageTypes();
                    if (this.route.snapshot.params["id"] !== "0") {
                        this.getInsurance(this.route.snapshot.params["id"]);
                    }
                },
                error => {
                    console.log('error get config');
                }
            );
    }

    getInsurance(id) {
        this.insuranceService.getInsurance(this.configData.WebApiUrl, id)
            .subscribe(
                data => {
                    this.model = data;
                },
                error => {
                    console.log('Hubo un problema al cargar el registro.');
                }
            );
    }

    getRiskTypes() {
        this.riskTypeService.getAll(this.configData.WebApiUrl)
            .subscribe(
            data => {
                this.riskTypes = data;
            }
            );
    }

    getCoverageTypes() {
        this.coverageTypeService.getAll(this.configData.WebApiUrl)
            .subscribe(
            data => {
                this.coverageTypes = data;
            }
            );
    }

    updateInsurance() {
        this.insuranceService.updateInsurance(this.configData.WebApiUrl, this.model.Id, this.model)
            .subscribe(
            data => {
                this.model = {}
                this.router.navigate(['pages/insurance']);
            },
            error => {
                console.log('Hubo un problema al salvar el registro.');
            }
            );
    }
}
