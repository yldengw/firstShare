import { UserService } from './../../service/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      items: MenuItem[];
      display: Boolean = false;
      ngOnInit() {
          this.items = [
              {
                  label: 'File',
                  items: [{
                          label: 'New',
                          icon: 'fa-plus',
                          items: [
                              {label: 'Project'},
                              {label: 'Other'},
                          ]
                      },
                      {label: 'Open'},
                      {label: 'Quit'}
                  ]
              },
              {
                  label: 'Edit',
                  icon: 'fa-edit',
                  items: [
                      {label: 'Undo', icon: 'fa-mail-forward'},
                      {label: 'Redo', icon: 'fa-mail-reply'}
                  ]
              }
          ];
      }
      showDialog() {
        this.display = true;
      }
      logout() {
        this.userService.clearAuth();
        this.router.navigateByUrl('/login');
    }
  constructor(private router: Router, private userService: UserService) { }

}
