import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
// import lottieWeb from "https://cdn.skypack.dev/lottie-web";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  options: AnimationOptions = {
    path: "./assets/animations/92377.json" // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
