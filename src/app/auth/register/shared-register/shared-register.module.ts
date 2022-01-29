import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterLayoutComponent } from './register-layout/register-layout.component';
import { NumberPadComponent } from './number-pad/number-pad.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		RegisterLayoutComponent,
		NumberPadComponent
	],
	exports: [
		RegisterLayoutComponent,
		NumberPadComponent
	]
})
export class SharedRegisterModule { }
