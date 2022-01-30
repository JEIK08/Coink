import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	constructor(private http: HttpClient) { }

	getVerificationCode(phone_number: string) {
		this.http.post(
			'/signup/sendSmsVerificationNumber',
			{ phone_number, log_signup_id: '' }
		).subscribe((data) => {
			console.log('Service', data);
		});
	}

}