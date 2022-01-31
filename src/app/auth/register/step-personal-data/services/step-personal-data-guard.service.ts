import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';

@Injectable({
	providedIn: 'root'
})
export class StepPersonalDataGuardService implements CanActivate {

	constructor(
		private registerService: RegisterService,
		private router: Router
	) { }

	canActivate() {
		return this.registerService.isPhoneVerified()
			? true
			: this.router.createUrlTree(['auth', 'register']);
	}
}
