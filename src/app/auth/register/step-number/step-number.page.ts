import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { RegisterService } from '../services/register.service';

@Component({
	selector: 'app-step-number',
	templateUrl: './step-number.page.html',
	styleUrls: ['./step-number.page.scss']
})
export class StepNumberPage {

	public phoneNumber: FormControl;
	public displayPhoneNumber: string;

	constructor(
		private registerService: RegisterService,
		private formBuilder: FormBuilder
	) {
		this.phoneNumber = this.formBuilder.control('', [
			Validators.required,
			Validators.minLength(10)
		]);

		this.phoneNumber.valueChanges.subscribe((newPhoneNumber: string) => {
			this.displayPhoneNumber = newPhoneNumber.substring(0, 3);
			if (newPhoneNumber.length <= 3) return;
			this.displayPhoneNumber += ' ' + newPhoneNumber.substring(3);
		});
	}

	getVerificationCode() {
		this.registerService.getVerificationCode();
	}

}
