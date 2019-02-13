import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';


import {AuthLoginService} from './services/auth-login.service';
import { AlertService} from './services/alert.service';
import { AuthRegisterService} from './services/auth-register.service';
import { AppRouting } from './app.routing';
import {AuthGuard} from './guards/auth.guard';
import { HomeComponent} from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import {ErrorInterceptorProvider} from './services/helper/error.interceptor';
import {JwtInterceptorProvider} from './services/helper/jwt.interceptor';
import { MenuComponent } from './menu/menu.component';
import {
  MatMenuModule, MatCommonModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatDatepickerModule, MatInputModule, MatSidenavModule, MatAutocompleteModule, MatCheckboxModule, MatGridListModule,
  MatDialogModule, MatLineModule, MatChipsModule, MatExpansionModule, MatProgressBarModule, MatRadioModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhereWeAreComponent } from './where-we-are/where-we-are.component';
import { CreateReviewComponent} from './create-review/create-review.component';

import {NgxEditorModule} from 'ngx-editor';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {ReviewService} from './services/review.service';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
      HomeComponent,
      AlertComponent,
      MenuComponent,
      CreateReviewComponent,
      EditReviewComponent,
      MyReviewsComponent,
      EditUserProfileComponent,
      CreateAdminComponent,
      UserManagementComponent,
      AboutUsComponent,
      ContactUsComponent,
      WhereWeAreComponent,
      ViewReviewsComponent,
  ],

  imports: [
    BrowserModule,
      FormsModule,
      AppRouting,
      HttpClientModule,
      MatMenuModule,
      MatCommonModule,
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatInputModule,
      MatSidenavModule,
      MatAutocompleteModule,
      MatCheckboxModule,
      MatGridListModule,
      MatDialogModule,
      MatLineModule,
      MatChipsModule,
      MatExpansionModule,
      MatProgressBarModule,
      MatRadioModule,
      BrowserAnimationsModule,
      NgxEditorModule,
      AngularFontAwesomeModule,

  ],

  providers: [AuthRegisterService,
  AuthLoginService, AuthGuard, AlertService, JwtInterceptorProvider, ErrorInterceptorProvider, ReviewService],

  bootstrap: [AppComponent]
})
export class AppModule { }
