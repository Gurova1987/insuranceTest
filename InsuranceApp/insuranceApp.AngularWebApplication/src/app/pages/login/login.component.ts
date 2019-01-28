import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../@core/data/users.service';

import { ConfigService } from '../../@core/data/config.service';
import { ConfigSite } from '../../@core/models/genericModels';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
    showMessages: any = {};
    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    submitted: boolean = false;
    rememberMe = false;
    configData: ConfigSite;

    constructor(protected service: UserService,
        private config: ConfigService,
        protected router: Router) {
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

    login(): void {
        this.errors = [];
        this.messages = [];
        this.submitted = true;

        this.service.userAuthentication(this.configData.WebApiUrl, this.user).subscribe((result) => {
            localStorage.setItem('userToken', result.access_token);
            this.router.navigate(['/home']);
        });
    }
}