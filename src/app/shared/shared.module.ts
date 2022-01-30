import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	exports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SharedModule { }
