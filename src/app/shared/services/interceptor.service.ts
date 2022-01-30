import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

	constructor() { }

	intercept(request: HttpRequest<any>, handler: HttpHandler) {
		request = request.clone({
			url: environment.API_URL + request.url,
			params: request.params.append('apiKey', environment.API_KEY)
		});
		return handler.handle(request);
	}

}