import { Component, Input, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-register-layout',
	templateUrl: './register-layout.component.html',
	styleUrls: ['./register-layout.component.scss']
})
export class RegisterLayoutComponent {

	@Input() public iconPath: string;
	@Input() public title: string;
	@Input() public description: TemplateRef<void>;

}
