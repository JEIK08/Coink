import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterPageRoutingModule } from './register-routing.module';

import { StepCodeGuardService } from './step-code/services/step-code-guard.service';
import { RegisterService } from './services/register.service';
import { StepPersonalDataGuardService } from './step-personal-data/services/step-personal-data-guard.service';

import { RegisterPage } from './register.page';

@NgModule({
	imports: [
		SharedModule,
		RegisterPageRoutingModule
	],
	providers: [
		StepCodeGuardService,
		StepPersonalDataGuardService,
		RegisterService
	],
	declarations: [
		RegisterPage
	]
})
export class RegisterPageModule { }
