import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
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
    configData: ConfigSite;

    constructor(private http: Http,
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
                },
                error => {
                    console.log('Hubo un problema al cargar el cliente.');
                }
            );
    }

    updateCustomer() {
        this.customerService.updateCustomer(this.configData.WebApiUrl, this.model)
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
