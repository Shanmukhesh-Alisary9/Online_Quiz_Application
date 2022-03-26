import { Component, OnInit } from '@angular/core';
import categories from '../../data/categories.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router) { }

  categories: any = categories;

  ngOnInit(): void {
  }

  startQuiz (key: string) {
    this.router.navigate([`/dashboard/quiz/${key}`]);
  }

}
