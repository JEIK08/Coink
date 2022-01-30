import { Component, HostBinding, Input, TemplateRef, OnInit } from '@angular/core';

@Component({
	selector: 'app-register-layout',
	templateUrl: './register-layout.component.html',
	styleUrls: ['./register-layout.component.scss']
})
export class RegisterLayoutComponent implements OnInit {

	@HostBinding('class') public class: string;

	@Input() public iconPath: string;
	@Input() public registerTitle: string;
	@Input() public description: TemplateRef<void>;

	ngOnInit() {
		if (!this.registerTitle) this.class = 'without-title';
	}

}
