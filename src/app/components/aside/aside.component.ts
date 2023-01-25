import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AsideComponent {
  constructor(private Aside__Emitter: DataShareService) { }
  Active__Aside: boolean = false;

  ngOnInit(): void {
    this.Aside__Emitter.Aside__Emitter.subscribe((e) => {
      this.Active__Aside = e;
    });
  }

  Close__Aside() {
    this.Active__Aside = false;
    this.Aside__Emitter.Aside__Emitter.emit(this.Active__Aside);
  }
}
