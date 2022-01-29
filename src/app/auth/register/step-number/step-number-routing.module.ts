import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepNumberPage } from './step-number.page';

const routes: Routes = [
	{ path: '', component: StepNumberPage },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StepNumberPageRoutingModule { }
