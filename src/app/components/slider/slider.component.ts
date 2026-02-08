import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class SliderComponent implements OnInit {
  @Input() Slider__Arr: any[] = [];
  SliderIndex: number = 0;
  private interval: any;

  ngOnInit(): void {
    // Auto-advance slider
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.NextSlide(1);
    }, 5000);
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  SliderTab(index: number) {
    this.stopAutoSlide();
    this.SliderIndex = index;
    // Restart auto slide after interaction
    this.startAutoSlide();
  }

  PrevSlide(step: number) {
    this.stopAutoSlide();
    this.SliderIndex += step;
    if (this.SliderIndex < 0) {
      this.SliderIndex = this.Slider__Arr.length - 1;
    }
    this.startAutoSlide();
  }

  NextSlide(step: number) {
    this.stopAutoSlide();
    this.SliderIndex += step;
    if (this.SliderIndex >= this.Slider__Arr.length) {
      this.SliderIndex = 0;
    }
    this.startAutoSlide();
  }
}
