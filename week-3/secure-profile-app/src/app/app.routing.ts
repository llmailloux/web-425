/**
 * Title: app.routing.ts
 * Author: Richard Krasso
 * Date: 20 July 2020
 * Modified By: Laurie Mailloux
 * Description: Routing file
 */


import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
]