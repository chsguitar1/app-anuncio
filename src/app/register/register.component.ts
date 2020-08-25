import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from './register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  
  registerForm : FormGroup
  constructor(private registerService: RegisterService, private fb: FormBuilder) {
     this.createForm()
   }
  
  createForm(){
    this.registerForm = this.fb.group({
      email: ["",[Validators.email]],
      senha:["",[Validators.minLength(6)]],
      repitaSenha:["",[Validators.minLength(6)]]
    })
  }

  sign(){
    this.registerService.register(this.registerForm.value.email,this.registerForm.value.senha)
    .then((response)=>{
      let register: RegisterModel ={
        email:this.registerForm.value.email
      }
      response !== null ? alert('Salvo com sucesso'):alert('Erro ao salvar')
      this.registerService.post(register)
      this.registerForm.reset()
    })
    
    
  }

}
