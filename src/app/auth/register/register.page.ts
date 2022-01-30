import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss']
})
export class RegisterPage {

	constructor(
		private router: Router
	) { }

	prevent(event: Event) {
		event.stopImmediatePropagation();
	}

	back() {
		if (history.state.navigationId == 1) {
			this.router.navigate(['autn']);
		} else {
			history.back();
		}
	}

}
