import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structual-directive',
  templateUrl: './structual-directive.component.html',
  styleUrls: ['./structual-directive.component.css']
})
export class StructualDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  age: number = 0;
  name: string = 'Nguyen Gia Phat';

  increment() {
    this.age += 1;
  }

  decrement() {
    this.age -= 1;
  }


  users = [
    {
      name: 'Nguyen Van A',
      age: '18',
      phone: '123456789'
    },
    {
      name: 'Nguyen Van B',
      age: '19',
      phone: '123456789'
    },
    {
      name: 'Nguyen Van C',
      age: '20',
      phone: '123456789'
    },
    {
      name: 'Nguyen Van D',
      age: '21',
      phone: '123456789'
    },
  ]
  anotherUsers = [];

  stringArr: string[] = ['angular practice', 'working', '100days'];
}
