import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterService } from '../services/register.service';

import { DocumentType } from '../interfaces/document-type';
import { Gender } from '../interfaces/gender';

@Component({
	selector: 'app-step-personal-data',
	templateUrl: './step-personal-data.page.html',
	styleUrls: ['./step-personal-data.page.scss']
})
export class StepPersonalDataPage {

	public form: FormGroup;
	public documentTypes: DocumentType[];
	public genders: Gender[];

	public showPin: boolean;
	public showConfirmPin: boolean;

	constructor(
		private registerService: RegisterService,
		private formBuilder: FormBuilder
	) {
		this.registerService.getDocumentTypes().subscribe(documenTypes => {
			this.documentTypes = documenTypes;
		});
		this.registerService.getGenders().subscribe(genders => {
			this.genders = genders;
		});
		this.form = this.formBuilder.group({
			documentType: [null, Validators.required],
			documentNumber: [null, Validators.required],
			documentExpedition: [null, Validators.required],
			birthDate: [null, Validators.required],
			gender: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
			emailConfirm: [null],
			pin: [null, [Validators.required, Validators.minLength(8)]],
			confirmPin: [null]
		});

		this.form.get('emailConfirm').setValidators([
			Validators.required,
			Validators.email,
			({ value }) => value == this.form.get('email').value ? null : { notEquals: true }
		]);
		this.form.get('confirmPin').setValidators([
			Validators.required,
			Validators.minLength(8),
			({ value }) => value == this.form.get('pin').value ? null : { notEquals: true }
		]);

		this.form.get('email').valueChanges.subscribe(() => {
			this.form.get('emailConfirm').updateValueAndValidity();
		});
		this.form.get('pin').valueChanges.subscribe(() => {
			this.form.get('confirmPin').updateValueAndValidity();
		});
	}

	selectDate({ detail: { value } }: any, field: string) {
		this.form.get(field).setValue(value.substring(0, 10));
	}

	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		this.registerService.setPersonalInformation(this.form.value);
	}

}