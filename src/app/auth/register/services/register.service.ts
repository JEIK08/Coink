import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoadingController } from '@ionic/angular';

import { CryptoService } from './crypto.service';

import { DocumentType } from '../interfaces/document-type';
import { Gender } from '../interfaces/gender';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	private phoneNumber: string;
	private phoneVerified: boolean;
	private personalInformation: any;

	constructor(
		private http: HttpClient,
		private cryptoService: CryptoService
	) { }

	setPhoneNumber(phoneNumber: string) {
		this.phoneNumber = phoneNumber;
	}

	getPhoneNumner() {
		return this.phoneNumber;
	}

	sendVerificationCode(loadingController: LoadingController) {
		return new Promise<void>((resolve, reject) => {
			loadingController.create().then(loading => {
				loading.present();
				let body = this.cryptoService.encrypt({
					phone_number: this.phoneNumber,
					log_signup_id: ''
				});
				body = { payload: body };
				this.http.post('/signup/sendSmsVerificationNumber', body).subscribe((data: any) => {
					resolve(this.cryptoService.decrypt(data.payload).verification_id);
					loading.dismiss().then();
				}, reject);
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
		return this.http.get<DocumentType[]>('/signup/documentTypes');
	}

	getGenders() {
		return this.http.get<Gender[]>('/signup/genders');
	}

	setPersonalInformation(body: any) {
		this.personalInformation = body;
	}

	getPersonalInformation() {
		return this.personalInformation;
	}

	register() {
		return new Promise<void>(resolve => {
			setTimeout(() => {
				console.log('Teléfono:', this.phoneNumber);
				console.log(
					'Documento de identidad:',
					this.personalInformation.documentType,
					this.personalInformation.documentNumber
				);
				console.log('Fecha de expedición:', this.personalInformation.documentExpedition);
				console.log('Fecha de nacimiento:', this.personalInformation.birthDate);
				console.log('Género:', this.personalInformation.gender);
				console.log('Email:', this.personalInformation.email);
				console.log('PIN:', this.personalInformation.pin);
				resolve();
			}, 500);
		});
	}

	clean() {
		this.phoneNumber = undefined;
		this.phoneVerified = undefined;
		this.personalInformation = undefined;
	}

}