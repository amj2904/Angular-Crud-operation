import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  signUpForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      mobile: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  signUpData() {
    this._http.post<any>("http://localhost:3000/signup", this.signUpForm.value).subscribe(res => {
      alert("Registration Successful")
      this.signUpForm.reset();
      this['router'].navigate(['login'])
    }, err => {
      alert("Somthing went wrong")

    })
  }
}
