import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component'; 
import {MatCardModule} from '@angular/material/card'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DashboardComponent } from './dashboard/dashboard.component';
const appRotas: Routes = [
  {
  path :'', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'register', component:RegisterComponent
  },
  {
    path: 'dashboard', component:DashboardComponent
  }
  
]

const firebaseConfig = {
  apiKey: "AIzaSyC0EnLEMldLiOykd8lLhyYqDLjyv8aoCew",
  authDomain: "anuncio-app.firebaseapp.com",
  databaseURL: "https://anuncio-app.firebaseio.com",
  projectId: "anuncio-app",
  storageBucket: "anuncio-app.appspot.com",
  messagingSenderId: "464262842135",
  appId: "1:464262842135:web:b8f6b46fdae36ef3c45952"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRotas),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFirestoreModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
