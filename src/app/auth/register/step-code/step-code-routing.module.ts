import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepCodePage } from './step-code.page';

const routes: Routes = [
	{ path: '', component: StepCodePage },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StepCodePageRoutingModule { }
