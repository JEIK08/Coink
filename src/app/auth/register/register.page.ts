import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StepNumberPage } from './step-number/step-number.page';
import { StepCodePage } from './step-code/step-code.page';
import { StepPersonalDataPage } from './step-personal-data/step-personal-data.page';
import { StepContractPage } from './step-contract/step-contract.page';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss']
})
export class RegisterPage {

	public step2: boolean;
	public step3: boolean;

	constructor(private router: Router) { }

	back() {
		if (history.state.navigationId == 1) {
			this.router.navigate(['autn']);
		} else {
			history.back();
		}
	}

	changeRoute(event: any) {
		switch (event.constructor) {
			case StepNumberPage:
			case StepCodePage:
				this.step2 = false;
				this.step3 = false;
				break;

			case StepPersonalDataPage:
				this.step2 = true;
				this.step3 = false;
				break;

			case StepContractPage:
				this.step2 = true;
				this.step3 = true;
		}
	}

}
