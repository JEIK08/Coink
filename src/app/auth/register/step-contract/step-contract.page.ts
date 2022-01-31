import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';

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

}