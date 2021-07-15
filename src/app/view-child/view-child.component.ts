import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ToggleComponent } from './toogle.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
})
export class ViewChildComponent implements OnInit {
  @ViewChild('toggleComp', {static: true}) toggleComp?: ToggleComponent;
  @ViewChild('buttonEle') buttonEle?: ElementRef<HTMLButtonElement>;
  @ViewChildren('inputEleChildren') inputChildrenEle?: QueryList<HTMLInputElement>
  @ViewChild('inputEle') inputEle?: ElementRef<HTMLInputElement>
  constructor() { }

  ngOnInit(): void {
    console.log(`toggleComp`, this.toggleComp)
  }

  ngAfterViewInit() {
    console.log(`toggleComp`, this.toggleComp)
    this.toggleComp?.toggle();
    this.inputEle?.nativeElement.focus();

    this.inputChildrenEle?.changes.subscribe((r) => {
      console.log(`r`, r)
    })
  }

}
