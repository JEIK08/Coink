import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { tap } from 'rxjs/operators';

import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	private phoneNumber: string;

	constructor(private http: HttpClient) { }

	setPhoneNumber(phoneNumber: string) {
		this.phoneNumber = phoneNumber;
	}

	getPhoneNumner() {
		return this.phoneNumber;
	}

	sendVerificationCode(loadingController: LoadingController) {
		return new Promise<void>(resolve => {
			loadingController.create().then(modal => {
				modal.present();
				setTimeout(() => {
					modal.dismiss().then();
					resolve();
				}, 300);
				// return this.http.post(
				// 	'/signup/sendSmsVerificationNumber',
				// 	{ phone_number, log_signup_id: '' }
				// ).pipe(tap(() => {
				// 	this.phoneNumber = phone_number;
				// }));
			});
		});
	}

}