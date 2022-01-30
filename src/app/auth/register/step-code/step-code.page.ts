import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertController, LoadingController } from '@ionic/angular';

import { RegisterService } from '../services/register.service';

@Component({
	selector: 'app-step-code',
	templateUrl: './step-code.page.html',
	styleUrls: ['./step-code.page.scss']
})
export class StepCodePage {

	public phoneNumber: string;
	public codeControl: FormControl;
	public displayCode: string;

	constructor(
		private registerService: RegisterService,
		private formBuilder: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private alertController: AlertController,
		private loadingController: LoadingController
	) {
		this.phoneNumber = this.registerService.getPhoneNumner();
		this.codeControl = this.formBuilder.control('1234', [
			Validators.required,
			Validators.minLength(4)
		]);
		this.codeControl.valueChanges.subscribe((newCode: string) => {
			if (newCode.length > 4) {
				this.codeControl.setValue(newCode.substring(0, 4));
				return;
			}
			this.displayCode = newCode.split('').map(_ => 'X').join(' ');
		});
	}

	sendCode() {
		if (this.codeControl.value == '0000') {

		} else {
			this.alertController.create({
				header: 'CÓDIGO INCORRECTO',
				message: 'El código que ingresaste es incorrecto, enviaremos un nuevo código a tu correo electrónico.',
				cssClass: 'code-modal',
				buttons: [
					{ text: 'Cancelar' },
					{
						text: 'Reenviar código',
						cssClass: 'warning',
						handler: () => this.registerService.sendVerificationCode(this.loadingController).then()
					},
				]
			}).then(alert => alert.present());
		}
	}

}
