import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

	constructor() { }

	intercept(request: HttpRequest<any>, handler: HttpHandler) {
		return handler.handle(request.clone({
			url: environment.API_URL + request.url,
			params: request.params.append('apiKey', environment.API_KEY)
		}));
	}

}