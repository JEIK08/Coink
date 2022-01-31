import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SharedRegisterModule } from '../shared-register/shared-register.module';
import { StepAcceptContractPageRoutingModule } from './step-contract-routing.module';

import { StepContractPage } from './step-contract.page';

@NgModule({
	imports: [
		SharedModule,
		SharedRegisterModule,
		StepAcceptContractPageRoutingModule
	],
	declarations: [
		StepContractPage
	]
})
export class StepAcceptContractPageModule { }