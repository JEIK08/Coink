import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

import { CryptoService } from './crypto.service';

@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

	constructor(private cryptoService: CryptoService) { }

	intercept(request: HttpRequest<any>, handler: HttpHandler) {
		const url = environment.API_URL + request.url;
		const params = request.params.append('apiKey', environment.API_KEY);
		if (request.body) {
			request = request.clone({
				url,
				params,
				body: { payload: this.cryptoService.encrypt(request.body) }
			});
		} else {
			request = request.clone({ url, params });
		}

		return handler.handle(request).pipe(map(response => {
			return response.type == HttpEventType.Response
				? response.clone({ body: this.cryptoService.decrypt(response.body.payload) })
				: response;
		}));
	}

}