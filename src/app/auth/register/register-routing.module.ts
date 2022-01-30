import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';

const routes: Routes = [
	{ path: '', component: RegisterPage, children: [
		{ path: 'phone-number', loadChildren: () => import('./step-number/step-number.module').then(m => m.StepNumberPageModule) },
		{ path: 'verification-code', loadChildren: () => import('./step-code/step-code.module').then(m => m.StepCodePageModule) },
		{ path: '**', redirectTo: 'phone-number', pathMatch: 'full' }
	] },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RegisterPageRoutingModule { }
