import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SharedRegisterModule } from '../shared-register/shared-register.module';
import { StepNumberPageRoutingModule } from './step-number-routing.module';

import { StepNumberPage } from './step-number.page';

@NgModule({
	imports: [
		SharedModule,
		SharedRegisterModule,
		StepNumberPageRoutingModule
	],
	declarations: [
		StepNumberPage
	]
})
export class StepNumberPageModule { }
