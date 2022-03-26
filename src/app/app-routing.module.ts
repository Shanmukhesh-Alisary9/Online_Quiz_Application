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
import { HomePageComponent } from './home-page/home-page.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardLandingComponent } from './admin-dashboard-landing/admin-dashboard-landing.component';

const routes: Routes = [

  {
    path: 'home',component: HomePageComponent
  },

  {
    path: 'auth',
    component: AuthModuleComponent,
    children: [
      { path: '', component: LoginRootComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

  {
    path: 'admin-dashboard',
    component: AdminComponent,
    children: [
      { path: '', component: AdminDashboardLandingComponent },
      
    ]
  }, 

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardLandingComponent },
      { path: 'quiz',
        component: QuizComponent
      },
      { path: 'reports', component: ReportsComponent },
      { path: 'results', component: ResultPageComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'createQuestions', component: CreateQuestionsComponent },
      {
        path: "quiz/:category",
        component: QuestionsComponent
      }
    ]
  },
  
  {
    path: '**',
    redirectTo: 'home',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
