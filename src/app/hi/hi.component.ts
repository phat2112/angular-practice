import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
  @Input() name: string = '';
  
  constructor() {
  }
  
  ngOnInit(): void {
  }


}
