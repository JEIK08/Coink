import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepContractPage } from './step-contract.page';

const routes: Routes = [
	{ path: '', component: StepContractPage },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StepAcceptContractPageRoutingModule { }