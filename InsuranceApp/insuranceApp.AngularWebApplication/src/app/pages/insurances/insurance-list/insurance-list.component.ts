import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { InsuranceService } from '../../../@core/data/insurance.service';
import { ConfigService } from '../../../@core/data/config.service';
import { ConfigSite } from '../../../@core/models/genericModels';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html'
})
export class InsuranceListComponent implements OnInit {

    insurances: any = [];
    configData: ConfigSite;

    constructor(private http: Http,
        private insuranceService: InsuranceService,
        private config: ConfigService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        //this._usertoken = JSON.parse(localStorage.getItem('btclogin'));
        this.config.GetConfig()
            .subscribe(
            data => {
                this.configData = data;
                this.getInsurances();
            },
            error => {
                console.log('error get config');
            }
            );
    }

    getInsurances() {
        this.insuranceService.getAll(this.configData.WebApiUrl)
            .subscribe(
                data => {
                    this.insurances = data;
                },
                error => {
                    console.log('Hubo un problema al cargar los registros.');
                }
            );
    }

    onDeleteConfirm(id): void {
        if (window.confirm('Esta seguro de eliminar el elemento seleccionado?')) {
            this.insuranceService.deleteInsurance(this.configData.WebApiUrl, id)
                .subscribe(
                data => {
                    this.getInsurances();
                },
                error => {
                    console.log('Hubo un problema al eliminar el registro.');
                }
                );
        }
    }
}
