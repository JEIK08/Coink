import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { InterceptorService } from './shared/services/interceptor.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		HttpClientModule,
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
