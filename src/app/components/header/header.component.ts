import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  constructor(private Aside__Emitter: DataShareService) { }

  HeaderSticky: boolean = false;
  Active__Aside: boolean = false;

  Open__Aside() {
    this.Active__Aside = true;
    this.Aside__Emitter.Aside__Emitter.emit(this.Active__Aside);
  }

  ngOnInit(): void {
    this.Aside__Emitter.Aside__Emitter.subscribe((e) => {
      this.Active__Aside = e;
    });
  }

  @HostListener('window:scroll', []) onScrollEvent() {
    const ScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    ScrollY >= 120 ? this.HeaderSticky = true : this.HeaderSticky = false;
  }
}
