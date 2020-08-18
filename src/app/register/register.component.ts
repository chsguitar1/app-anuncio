import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) {

   }

  ngOnInit(): void {
  }

  sign(){
    this.registerService.register("chsguitar1@gmail.com", "123456")
  }

}
