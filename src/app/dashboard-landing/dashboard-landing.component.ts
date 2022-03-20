import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.css']
})
export class DashboardLandingComponent implements OnInit {

  constructor(private router: Router,) { }

  searchText: any;
  options:any = []
  filterOptions:any = []

  //Form Control
  myControl = new FormControl();

  ngOnInit(): void {
  }

}
