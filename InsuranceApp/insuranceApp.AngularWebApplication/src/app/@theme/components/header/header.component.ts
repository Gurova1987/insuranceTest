import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService, NbMenuItem } from '@nebular/theme';
import { Router } from '@angular/router';
import { UserService } from '../../../@core/data/users.service';

import { ConfigService } from '../../../@core/data/config.service';
import { ConfigSite } from '../../../@core/models/genericModels';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  configData: ConfigSite;
  user: any;

  userMenu = [{ title: 'Log out', data: { id: 'logout' }  }];

  constructor(private sidebarService: NbSidebarService,
              private config: ConfigService,
              private menuService: NbMenuService,
              private userService: UserService,
              protected router: Router) {
  }

  ngOnInit() {
      this.menuService.onItemClick()
          .subscribe((item) => {
              if (item.item.data.id === 'logout') {
                  this.userService.logOut();
                  this.router.navigate(['/auth/login']);
              }
          });


      this.config.GetConfig()
          .subscribe(
              data => {
                  this.configData = data;
                  this.userService.getUser(this.configData.WebApiUrl)
                      .subscribe((users: any) => this.user = users.Email);
              },
              error => {
                  console.log('error get config');
              }
          );
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
  }
}
