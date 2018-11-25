import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {AboutComponent} from "./components/about/about.component";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {QuizEditComponent} from './components/quiz/quiz-edit.component';
import {QuestionListComponent} from "./components/question/question-list.component";
import {QuestionEditComponent} from "./components/question/question-edit.component";
import {AnswerEditComponent} from "./components/answer/answer-edit.component";
import {AnswerListComponent} from "./components/answer/answer-list.component";
import {ResultListComponent} from "./components/result/result-list.component";
import {ResultEditComponent} from "./components/result/result-edit.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {QuizSearchComponent} from "./components/quiz/quiz-search.component";
/*import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';*/

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    QuizListComponent,
    QuizComponent,
    QuizEditComponent,
    QuizSearchComponent,
    QuestionEditComponent,
    QuestionListComponent,
    AnswerEditComponent,
    AnswerListComponent,
    ResultEditComponent,
    ResultListComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent,
    /*FontAwesomeModule,*/
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    /*FontAwesomeModule,*/
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'quiz/create', component: QuizEditComponent },
      { path: 'quiz/edit/:id', component: QuizEditComponent },
      { path: 'quiz/:id', component: QuizComponent },
      { path: 'question/create/:id', component: QuestionEditComponent },
      { path: 'question/edit/:id', component: QuestionEditComponent },
      { path: 'answer/create/:id', component: AnswerEditComponent },
      { path: 'answer/edit/:id', component: AnswerEditComponent },
      { path: 'result/create/:id', component: ResultEditComponent },
      { path: 'result/edit/:id', component: ResultEditComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
