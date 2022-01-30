import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { RegisterService } from './services/register.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss']
})
export class RegisterPage {

	public step2: boolean;

	constructor(
		private registerService: RegisterService,
		private router: Router
	) {
		this.router.events.subscribe(event => {
			if (!(event instanceof NavigationEnd)) return;
			this.step2 = this.registerService.isPhoneVerified();
		});
	}

	back() {
		if (history.state.navigationId == 1) {
			this.router.navigate(['autn']);
		} else {
			history.back();
		}
	}

}
