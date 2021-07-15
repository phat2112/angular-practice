import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  user = {
    name: 'PHat',
    age: '22'
  }

  name = 'Practice Angular'

  handleClick() {
    console.log(`click`)
  }
}
