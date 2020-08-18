import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private auth: AngularFireAuth) {
    
   }

    register(login: string, senha:string){
     this.auth.createUserWithEmailAndPassword(login,senha)
   }
}
