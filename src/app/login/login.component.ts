import { Component, OnInit } from '@angular/core';
import {LoginModel} from'./login-model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email: string
  resultado: number
  login : LoginModel
  lista: Array<any> = [
    {
     nome: 'teste 1'
    },
    {
      nome: 'teste 2'
     },
     {
      nome: 'teste 4'
     }
]
  constructor() {
    console.log(this.lista)
    this.email = 'chs@email.com'
 
    let tamanho : number = 1.0
    let largura = "2"
    
    this.resultado= tamanho * +largura
    console.log(this.resultado)
     this.login ={
      senha: '123',
      email: 'email@email.com'
    
    }

   }

  ngOnInit(): void {
  }

  removeEmail(){
    this.email = ''
  }

}
