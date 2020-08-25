import { Component, OnInit } from '@angular/core';
import {LoginModel} from'./login-model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginForm: FormGroup
  constructor(private fb: FormBuilder) {
      this.creatForm()
   }

   creatForm(){
     this.loginForm = this.fb.group({
       login: ["",[Validators.email]],
       senha:['',[Validators.minLength(6)]]
     })
   }

   login(){

   }

 

}
