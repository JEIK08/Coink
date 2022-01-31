import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoadingController, AlertController } from '@ionic/angular';

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
		private formBuilder: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private loadingController: LoadingController,
		private alertController: AlertController
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
		this.registerService.setPhoneNumber(this.phoneNumber.value);
		this.registerService.sendVerificationCode(this.loadingController).then((verificationCode: any) => {
			console.log('Código de verificación:', verificationCode);
			this.router.navigate(['..', 'verification-code'], { relativeTo: this.route });
		}).catch(() => {
			this.alertController.create({
				header: 'Error',
				message: 'No se pudo enviar el código, intente con otro número de teléfono',
				buttons: ['Cerrar']
			}).then(alert => alert.present());
		});
	}

}
