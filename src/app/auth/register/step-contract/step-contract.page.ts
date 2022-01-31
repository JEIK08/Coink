import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IonModal, LoadingController } from '@ionic/angular';

import { RegisterService } from '../services/register.service';

@Component({
	selector: 'app-step-contract',
	templateUrl: './step-contract.page.html',
	styleUrls: ['./step-contract.page.scss']
})
export class StepContractPage {

	public accept: boolean;
	public showModal: boolean;

	constructor(
		private registerService: RegisterService,
		private router: Router,
		private loadingController: LoadingController
	) { }

	onAccept() {
		if (!this.accept) return;
		this.loadingController.create().then(loading => {
			loading.present();
			this.registerService.register().then(() => {
				loading.dismiss();
				this.showModal = true;
			});
		});
	}

	backToHome(modal: IonModal) {
		modal.dismiss();
		this.registerService.clean();
		this.router.navigate(['']);
	}

}