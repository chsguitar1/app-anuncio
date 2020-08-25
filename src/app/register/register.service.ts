import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import{RegisterModel} from './register-model'

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private auth: AngularFireAuth,
     private angularFire:AngularFirestore) {
    
   }

    register(login: string, senha:string){
     return this.auth.createUserWithEmailAndPassword(login,senha)
   }

   post(register: RegisterModel){
      this.angularFire.collection<RegisterModel>('cadastro').add(register)
   }

   
}
