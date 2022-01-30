import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepPersonalDataPage } from './step-personal-data.page';

const routes: Routes = [
	{ path: '', component: StepPersonalDataPage },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StepPersonalDataPageRoutingModule { }