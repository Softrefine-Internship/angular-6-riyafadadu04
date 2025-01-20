import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registerForm!: FormGroup;
  genders = ['male', 'female'];

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male', [Validators.required]),
      married: new FormControl(false, [Validators.required]),
      country: new FormControl('india', [Validators.required]),
    });
  }

  OnSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.onReset();
    }
  }

  onReset() {
    this.registerForm.reset({
      fname: null,
      lname: null,
      email: null,
      gender: 'male',
      married: false,
      country: 'india',
    });
  }
}
