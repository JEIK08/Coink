import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	private phoneNumber: string;

	constructor(private http: HttpClient) { }

	getVerificationCode(phone_number: string) {
		return this.http.post(
			'/signup/sendSmsVerificationNumber',
			{ phone_number, log_signup_id: '' }
		).pipe(tap(() => {
			this.phoneNumber = phone_number;
		}));
	}

	getPhoneNumner() {
		return this.phoneNumber;
	}

}