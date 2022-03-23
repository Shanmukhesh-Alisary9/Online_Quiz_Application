import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModuleComponent } from './auth-module/auth-module.component';
import { LoginRootComponent } from './login-root/login-root.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReportsComponent } from './reports/reports.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';

const routes: Routes = [

  {
    path: 'auth',
    component: AuthModuleComponent,
    children: [
      { path: '', component: LoginRootComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardLandingComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'results', component: ResultPageComponent },
    ]
  }, 
  {
    path: '**',
    redirectTo: 'auth',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
