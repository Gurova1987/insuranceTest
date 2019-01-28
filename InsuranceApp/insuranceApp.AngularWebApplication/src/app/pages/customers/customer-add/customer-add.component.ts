import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from '../../../@core/data/customers.service';
import { ConfigService } from '../../../@core/data/config.service';
import { ConfigSite } from '../../../@core/models/genericModels';

@Component({
    selector: 'app-customer-add',
    styleUrls: ['./customer-add.component.scss'],
    templateUrl: './customer-add.component.html'
})

export class CustomerAddComponent implements OnInit {
    
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
                },
                error => {
                    console.log('error get config');
                }
            );
    }

    saveCustomer() {
        this.customerService.addCustomer(this.configData.WebApiUrl, this.model)
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
