import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATOR_MESSAGES: any = {
  required: 'Please fill in this field!',
  email: 'Please enter a valid email address!',
  minlength: 'Needs to have at least 5 characters!',
  notMatch: 'Passwords do not match!'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit, OnChanges {
  @Input() control!: AbstractControl;
  @Input() showErrorsWhen: boolean = true;
  errorMessages: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => this.checkValidation());
    this.control.valueChanges.subscribe(() => this.checkValidation());
  }

  checkValidation() {
    const errors = this.control.errors;
    if (!errors) {
      this.errorMessages = [];
      return;
    } else {
      const errorKeys = Object.keys(errors);
      this.errorMessages = errorKeys.map(key => VALIDATOR_MESSAGES[key]);
    }
  }
}
