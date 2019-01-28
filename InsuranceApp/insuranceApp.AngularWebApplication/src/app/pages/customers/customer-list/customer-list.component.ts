import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from '../../../@core/data/customers.service';
import { ConfigService } from '../../../@core/data/config.service';
import { ConfigSite } from '../../../@core/models/genericModels';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

    customers: any = [];
    configData: ConfigSite;

    constructor(private http: Http,
        private customerService: CustomerService,
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
                    this.getCustomers();
                },
                error => {
                    console.log('error get config');
                }
            );
    }

    getCustomers() {
        this.customerService.getCustomers(this.configData.WebApiUrl)
            .subscribe(
                data => {
                    this.customers = data;
                },
                error => {
                    console.log('Hubo un problema al cargar los clientes.');
                }
            );
    }

    onDeleteConfirm(id): void {
        if (window.confirm('Esta seguro de eliminar el cliente seleccionado?')) {
            this.customerService.deleteCustomer(this.configData.WebApiUrl, id)
                .subscribe(
                    data => {
                        this.getCustomers();
                    },
                    error => {
                        console.log('Hubo un problema al eliminar el cliente.');
                    }
                );
        }
    }
}
