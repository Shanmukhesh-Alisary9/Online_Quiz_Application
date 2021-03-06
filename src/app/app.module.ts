import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModuleComponent } from './auth-module/auth-module.component';
import { LoginRootComponent } from './login-root/login-root.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReportsComponent } from './reports/reports.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LottieModule } from 'ngx-lottie';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardLandingComponent } from './admin-dashboard-landing/admin-dashboard-landing.component';
import { MatInputModule } from '@angular/material/input';
// import { NgModule } from '@angular/core';
import player from 'lottie-web';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    AuthModuleComponent,
    LoginRootComponent,
    SignupComponent,
    DashboardComponent,
    DashboardLandingComponent,
    QuizComponent,
    ReportsComponent,
    ResultPageComponent,
    QuestionsComponent,
    CreateQuestionsComponent,
    HomePageComponent,
    AdminComponent,
    AdminDashboardLandingComponent,
    AdminReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    SlickCarouselModule,
    LottieModule,
    MatInputModule,
    LottieModule.forRoot({ player: playerFactory })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
