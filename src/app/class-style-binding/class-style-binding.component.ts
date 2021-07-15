import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.css']
})
export class ClassStyleBindingComponent {

  isDanger = false;
  isWarning = false; 

  class = 'redBorder warning';
}
