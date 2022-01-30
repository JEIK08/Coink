import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SharedRegisterModule } from '../shared-register/shared-register.module';
import { StepPersonalDataPageRoutingModule } from './step-personal-data-routing.module';

import { StepPersonalDataPage } from './step-personal-data.page';

@NgModule({
	imports: [
		SharedModule,
		SharedRegisterModule,
		StepPersonalDataPageRoutingModule
	],
	declarations: [
		StepPersonalDataPage
	]
})
export class StepPersonalDataPageModule { }
