import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

@NgModule({
	imports: [
		SharedModule,
		AuthPageRoutingModule
	],
	declarations: [
		AuthPage
	]
})
export class AuthPageModule { }
