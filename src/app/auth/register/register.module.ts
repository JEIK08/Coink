import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterService } from './services/register.service';

import { RegisterPage } from './register.page';

@NgModule({
	imports: [
		SharedModule,
		RegisterPageRoutingModule
	],
	providers: [
		RegisterService
	],
	declarations: [
		RegisterPage
	]
})
export class RegisterPageModule { }
