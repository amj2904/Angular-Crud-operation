import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormValue!: FormGroup;
  constructor(private formBuilder: FormBuilder,private _http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginFormValue = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  logIn() {
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=> {
      const user = res.find((a: any) => {
        return a.email === this.loginFormValue.value.email && a.password === this.loginFormValue.value.password
      })
      if (user) {
        alert("login Successful")
        this.loginFormValue.reset();
        this.router.navigate(['restaurent'])
      }else{
        alert("user not found")
      }
      
    },err=>{
      alert("Somthing went Wrong")
    }
    )
  }
}
