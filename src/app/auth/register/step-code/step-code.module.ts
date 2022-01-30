import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SharedRegisterModule } from '../shared-register/shared-register.module';
import { StepCodePageRoutingModule } from './step-code-routing.module';

import { StepCodePage } from './step-code.page';

@NgModule({
	imports: [
		SharedModule,
		SharedRegisterModule,
		StepCodePageRoutingModule
	],
	declarations: [
		StepCodePage
	]
})
export class StepCodePageModule { }
