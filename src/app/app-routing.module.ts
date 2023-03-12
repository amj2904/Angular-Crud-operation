import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RestaurentdashComponent } from './restaurentdash/restaurentdash.component';
import { SignupComponent } from './signup/signup.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminRestaurentDetailsComponent } from './admin-restaurent-details/admin-restaurent-details.component';
import { AdminUserSignUpComponent } from './admin-user-sign-up/admin-user-sign-up.component';
import { AdminContactUsDataComponent } from './admin-contact-us-data/admin-contact-us-data.component';

const routes: Routes = [
  {
    path: '', redirectTo: "login", pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "restaurent", component: RestaurentdashComponent
  },
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path:"contactus",component:ContactusComponent
  },
  {
    path:"feedback",component:FeedbackComponent
  },
  {
    path:"Admin Login",component:AdminLoginComponent
  },
  {
    path:"admin-Deatils",component:AdminDetailsComponent
  },
  {

    path:"AdminRestaurentDetails",component:AdminRestaurentDetailsComponent
  },
  {
    path:"signUpData",component:AdminUserSignUpComponent
  },
  {
    path:"ContactUs",component:AdminContactUsDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
