import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentdashComponent } from './restaurentdash/restaurentdash.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminRestaurentDetailsComponent } from './admin-restaurent-details/admin-restaurent-details.component';
import { AdminUserSignUpComponent } from './admin-user-sign-up/admin-user-sign-up.component';
import { AdminContactUsDataComponent } from './admin-contact-us-data/admin-contact-us-data.component';

 

@NgModule({
  declarations: [
    AppComponent,
    RestaurentdashComponent,
    RestaurentComponent,
    LoginComponent,
    SignupComponent,
    FeedbackComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    AdminLoginComponent,
    AdminDetailsComponent,
    AdminRestaurentDetailsComponent,
    AdminUserSignUpComponent,
    AdminContactUsDataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
