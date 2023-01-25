import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {
  @Input() Slider__Arr: any[] = [];
  SliderIndex: any = 0;

  SliderTab(index: any) { this.Slide(index) }

  ngOnInit(): void {

  }

  PrevSlide(index: any) {
    this.SliderIndex = this.SliderIndex += index;
    if (this.SliderIndex < 0) {
      this.SliderIndex = this.Slider__Arr.length - 1;
    }
    this.Slide(this.SliderIndex)
  }
  NextSlide(index: any) {
    this.SliderIndex = this.SliderIndex += index;
    if (this.SliderIndex > this.Slider__Arr.length - 1) {
      this.SliderIndex = 0;
    }
    this.Slide(this.SliderIndex)
  }
  Slide(index: any) {
    this.SliderIndex = index;
    const Slide = document.querySelectorAll(".Slide");
    const SiderTab = document.querySelectorAll(".SiderTab");
    Slide.forEach(slide => slide.classList.remove('Active'));
    SiderTab.forEach(tab => tab.classList.remove('Active'));
    SiderTab[this.SliderIndex].classList.add('Active');
    Slide[this.SliderIndex].classList.add('Active');
  }
}
