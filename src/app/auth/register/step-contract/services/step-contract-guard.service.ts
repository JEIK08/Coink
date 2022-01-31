import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { RegisterService } from '../../services/register.service';

@Injectable({
	providedIn: 'root'
})
export class StepContractGuardService implements CanActivate {

	constructor(
		private registerService: RegisterService,
		private router: Router
	) { }

	canActivate() {
		return this.registerService.getPersonalInformation()
			? true
			: this.router.createUrlTree(['auth', 'register']);
	}

}