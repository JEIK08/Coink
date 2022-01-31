import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepCodeGuardService } from './step-code/services/step-code-guard.service';
import { StepPersonalDataGuardService } from './step-personal-data/services/step-personal-data-guard.service';
import { StepContractGuardService } from './step-contract/services/step-contract-guard.service';

import { RegisterPage } from './register.page';

const routes: Routes = [
	{ path: '', component: RegisterPage, children: [
		{ path: 'phone-number', loadChildren: () => import('./step-number/step-number.module').then(m => m.StepNumberPageModule) },
		{ path: 'verification-code', canLoad: [StepCodeGuardService], loadChildren: () => import('./step-code/step-code.module').then(m => m.StepCodePageModule) },
		{ path: 'personal-data', canLoad: [StepPersonalDataGuardService], loadChildren: () => import('./step-personal-data/step-personal-data.module').then(m => m.StepPersonalDataPageModule) },
		{ path: 'accept-contract', canLoad: [StepContractGuardService], loadChildren: () => import('./step-contract/step-contract.module').then(m => m.StepAcceptContractPageModule) },
		{ path: '**', redirectTo: 'phone-number', pathMatch: 'full' }
	] },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RegisterPageRoutingModule { }