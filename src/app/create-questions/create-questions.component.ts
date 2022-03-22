import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import {cloneDeep} from 'lodash';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import questions from '../../data/questions.json'

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  constructor(private router: Router,) {
    
  }
  @ViewChild('slickModal') slickModal?: SlickCarouselComponent;
  @Input() countText: string = `1/${questions['sports'].questions.length}`;

  category: any = cloneDeep(questions['sports']);
  slideConfig: any = {slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, infinite: false}
  checked: any = ''

  slickInit(e: any) {
    console.log(questions);
    Array.from(document.getElementsByClassName('progress-bar') as HTMLCollectionOf<HTMLElement>)[0].style.width = `${(e.slick.currentSlide + 1) / e.slick.slideCount * 100}%`;
  }

  afterChange(e: any) {
    this.countText = `${e.slick.currentSlide + 1}/${e.slick.slideCount}`;
    Array.from(document.getElementsByClassName('progress-bar') as HTMLCollectionOf<HTMLElement>)[0].style.width = `${(e.slick.currentSlide + 1) / e.slick.slideCount * 100}%`;
  }

  next() {
    this.slickModal?.slickNext();
  }
  
  prev() {
    this.slickModal?.slickPrev();
  }

  changeRadio(e: any, option: any) {
    option.selected = e.target.value;
  }

  ngOnInit(): void {
  }

}
