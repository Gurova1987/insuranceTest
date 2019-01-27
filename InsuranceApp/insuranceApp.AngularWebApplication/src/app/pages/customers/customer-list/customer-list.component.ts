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

    _customers: any = [];
    _configData: ConfigSite;

    constructor(private _http: Http,
        private _CustomerService: CustomerService,
        private _Config: ConfigService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {

        //this._usertoken = JSON.parse(localStorage.getItem('btclogin'));
        this._Config.GetConfig()
            .subscribe(
                data => {
                    this._configData = data;
                    this.getCustomers();
                },
                error => {
                    console.log('error get config');
                }
            );
    }

    getCustomers() {
        this._CustomerService.GetCustomers(this._configData.WebApiUrl)
            .subscribe(
                data => {
                    this._customers = data;
                },
                error => {
                    console.log('Hubo un problema cargar los emisores de este usuario.');
                }
            );
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Esta seguro de eliminar el cliente seleccionado?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
