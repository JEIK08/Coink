import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterService } from '../services/register.service';

import { DocumentType } from '../interfaces/document-type';

@Component({
	selector: 'app-step-personal-data',
	templateUrl: './step-personal-data.page.html',
	styleUrls: ['./step-personal-data.page.scss']
})
export class StepPersonalDataPage {

	public form: FormGroup;
	public documentTypes: DocumentType[];

	constructor(
		private registerService: RegisterService,
		private formBuilder: FormBuilder
	) {
		this.registerService.getDocumentTypes().subscribe(documenTypes => {
			this.documentTypes = documenTypes;
		});
		this.form = this.formBuilder.group({
			documentType: [null, Validators.required],
			documentNumber: [null, Validators.required]
		});
	}

}