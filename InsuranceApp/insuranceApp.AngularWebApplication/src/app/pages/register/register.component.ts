import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../@core/data/users.service';

import { ConfigService } from '../../@core/data/config.service';
import { ConfigSite, LoginInfo } from '../../@core/models/genericModels';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {

    configData: ConfigSite;
    showMessages: any = {};
    submitted = false;
    errors: string[] = [];
    messages: string[] = [];
    user: any = {};

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

    register(): void {
        this.errors = this.messages = [];
        this.submitted = true;

        this.service.register(this.configData.WebApiUrl, this.user).subscribe((result) => {
            this.router.navigate(['/login']);
        });
    }
}
