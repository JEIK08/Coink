import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	constructor(private http: HttpClient) { }

	getVerificationCode() {
		this.http.post('/signup/sendSmsVerificationNumber', {
			payload: "wO2uQHZuK0vC76DGcrsrc/7gcNufuWM98C/DdaYGm7mY6tclOJXaLhBc560ohkSDu43Rbpff8LM="
		}).subscribe((data) => {
			console.log(data);
		});
	}

}