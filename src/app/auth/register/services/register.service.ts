import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

import { LoadingController } from '@ionic/angular';

import { DocumentType } from '../interfaces/document-type';
import { Gender } from '../interfaces/gender';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	private phoneNumber: string;
	private phoneVerified: boolean;
	private personalInformation: any;

	constructor(private http: HttpClient) { }

	setPhoneNumber(phoneNumber: string) {
		this.phoneNumber = phoneNumber;
	}

	getPhoneNumner() {
		return this.phoneNumber;
	}

	sendVerificationCode(loadingController: LoadingController) {
		// const url = environment.API_URL + request.url;
		// const params = request.params.append('apiKey', environment.API_KEY);
		// if (request.body) {
		// 	request = request.clone({
		// 		url,
		// 		params,
		// 		body: { payload: this.cryptoService.encrypt(request.body) }
		// 	});
		// } else {
		// 	request = request.clone({ url, params });
		// }
		// .pipe(map(response => {
		// 	return response.type == HttpEventType.Response
		// 		? response.clone({ body: this.cryptoService.decrypt(response.body.payload) })
		// 		: response;
		// }));
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

	isPhoneVerified() {
		return this.phoneVerified;
	}

	setPhoneVerified(phoneVerified: boolean) {
		this.phoneVerified = phoneVerified;
	}

	getDocumentTypes() {
		return new Observable<DocumentType[]>(observer => {
			setTimeout(() => {
				observer.next(
					[
						{ id: 1, notation: 'CC' as any, description: 'Cédula de Ciudadanía' },
						{ id: 2, notation: 'TI' as any, description: 'Tarjeta de Identidad' }
					]
				);
				observer.complete();
			}, 2000);
		});
		// return this.http.get('/signup/documentTypes');
	}

	getGenders() {
		return new Observable<Gender[]>(observer => {
			setTimeout(() => {
				observer.next(
					[
						{ id: 1, name: "Masculino", description: "Género Masculino" },
						{ id: 2, name: "Femenino", description: "Género Femenino" }
					]
				);
				observer.complete();
			}, 2000);
		});
		// return this.http.get('/signup/genders');
	}

	setPersonalInformation(body: any) {
		this.personalInformation = body;
	}

	getPersonalInformation() {
		return this.personalInformation;
	}

}