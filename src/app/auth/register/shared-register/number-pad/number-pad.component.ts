import { Component, Output, EventEmitter, Injector, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
	selector: 'app-number-pad',
	templateUrl: './number-pad.component.html',
	styleUrls: ['./number-pad.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: NumberPadComponent
		}
	]
})
export class NumberPadComponent implements ControlValueAccessor, OnInit {

	@Output() public onComplete: EventEmitter<void>;

	public onChange: Function;
	public onTouched: Function;
	public control: NgControl;

	constructor(private injector: Injector) {
		this.onChange = () => { };
		this.onTouched = () => { };
		this.onComplete = new EventEmitter();
	}

	ngOnInit() {
		this.control = this.injector.get(NgControl);
	}

	registerOnChange(fn: Function) {
		this.onChange = fn;
	}

	registerOnTouched(fn: Function) {
		this.onTouched = fn;
	}

	writeValue(newValue: string) {
		if (newValue || newValue == '') return;
		setTimeout(() => this.onChange(''));
	}

	onPressDigit(digit: number) {
		this.onChange(this.control.value + digit);
	}
	
	onBackspace() {
		if (this.control.value.length == 0) return;
		this.onChange(this.control.value.substring(0, this.control.value.length - 1));
	}

}
