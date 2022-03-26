import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  // "quizCategory" = {
  //   quizNames: [
  //     'sports',
  //     'entertainment',
  //     'science',
  //     'Mathematics',
  //     'Physcology',
  //     'Politics',
  //     'Automobiles',
  //     'General Knowledge',
  //     'Electronics',
  //     'Geography'
  //   ]
  // }

  quizCategory : any = [

  ]
  
  ngOnInit(): void {
  }

}
