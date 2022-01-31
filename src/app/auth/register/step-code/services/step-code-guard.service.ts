import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';

@Injectable({
	providedIn: 'root'
})
export class StepCodeGuardService implements CanLoad {

	constructor(
		private registerService: RegisterService,
		private router: Router
	) { }

	canLoad() {
		return this.registerService.getPhoneNumner()
			? true
			: this.router.createUrlTree(['auth', 'register']);
	}

}