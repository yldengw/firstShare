import { UserService } from './shared/service/user.service';
import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/merge';
import { Message } from 'primeng/primeng';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	isSingle: boolean;
	public msgs: Message[] = [];
    constructor(
		private userService: UserService

    ) {

    }
	ngOnInit() {
		this.userService.populate();
        this.userService.isAuthenticated.subscribe(
            (isAuthenticated) => {
                this.isSingle = !isAuthenticated;
            }
        );
	}
}