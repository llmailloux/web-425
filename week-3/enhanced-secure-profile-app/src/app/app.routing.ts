/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Date: 22 July 2020
 * Modified By: Laurie Mailloux
 * 
 * Description: Routing file
 */


import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [SignInGuard]
    }
    
]