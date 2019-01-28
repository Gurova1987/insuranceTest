import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { InsuranceService } from '../../../@core/data/insurance.service';
import { CustomerService } from '../../../@core/data/customers.service';
import { ConfigService } from '../../../@core/data/config.service';
import { ConfigSite } from '../../../@core/models/genericModels';

@Component({
    selector: 'app-customer-edit',
    styleUrls: ['./customer-edit.component.scss'],
    templateUrl: './customer-edit.component.html'
})

export class CustomerEditComponent implements OnInit {

    model: any = {}
    insurances: any = [];
    configData: ConfigSite;

    constructor(private http: Http,
        private insuranceService: InsuranceService,
        private customerService: CustomerService,
        private config: ConfigService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.config.GetConfig()
            .subscribe(
            data => {
                this.configData = data;
                this.getInsurances();
                if (this.route.snapshot.params["id"] !== "0") {
                    this.getCustomer(this.route.snapshot.params["id"]);
                }
            },
            error => {
                console.log('error get config');
            }
        );
    }

    getCustomer(id) {
        this.customerService.getCustomer(this.configData.WebApiUrl, id)
            .subscribe(
                data => {
                    this.model = data;
                    if (this.model.Insurances && this.model.Insurances.length) {
                        this.model.Insurances.forEach(item => {
                            var match = this.insurances.find(x => { return x.Id === item.Id });
                            if (match) match.Selected = true;
                        });
                    }
                },
                error => {
                    console.log('Hubo un problema al cargar el cliente.');
                }
            );
    }

    getInsurances() {
        this.insuranceService.getAll(this.configData.WebApiUrl)
            .subscribe(
                data => {
                    this.insurances = data;
                    if (this.model.Insurances && this.model.Insurances.length) {
                        this.model.Insurances.forEach(item => {
                            var match = this.insurances.find(x => { return x.Id === item.Id });
                            if (match) match.Selected = true;
                        });
                    }
                },
                error => {
                    console.log('Hubo un problema al cargar los registros.');
                }
            );
    }

    updateCustomer() {
        let customerInsurances = this.insurances.filter((item: any) => { return item.Selected; });
        this.model.Insurances = customerInsurances;
        this.customerService.updateCustomer(this.configData.WebApiUrl, this.model.Id, this.model)
            .subscribe(
                data => {
                    this.model = {}
                    this.router.navigate(['pages/customers']);
                },
                error => {
                    console.log('Hubo un problema al salvar el cliente.');
                }
            );
    }
}
