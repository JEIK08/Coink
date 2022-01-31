import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';

@Injectable({
	providedIn: 'root'
})
export class StepContractGuardService implements CanLoad {

	constructor(
		private registerService: RegisterService,
		private router: Router
	) { }

	canLoad() {
		return this.registerService.getPersonalInformation()
			? true
			: this.router.createUrlTree(['auth', 'register']);
	}

}