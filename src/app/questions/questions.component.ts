import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import questions from '../../data/questions.json'
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private router: ActivatedRoute,) {
    
  }
  @ViewChild('slickModal') slickModal?: SlickCarouselComponent;
  @Input() countText: any = '';

  questions: any = questions;
  category: any = {};
  slideConfig: any = {slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, infinite: false}
  checked: any = ''

  slickInit(e: any) {
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
    this.router.params.subscribe((paramsId: any) => {
      const key : string = paramsId['category'];
      this.category = cloneDeep(this.questions[key])
      this.countText = `1/${this.questions[key].questions.length}`
  });
  }

  submit() {
    const filtered = this.category.questions.filter((x: any) => x.selected === x.answer);
    questions['sports'].status = 'COMPLETED';
    questions['sports'].result = `${filtered / this.category.questions}`
  }

}
