import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const appRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent },
    { path: '**', component: PagenotfoundComponent}
];


export const APP_ROUTS = RouterModule.forRoot( appRoutes, { useHash: true} );
