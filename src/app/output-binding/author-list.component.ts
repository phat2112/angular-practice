import { Component } from '@angular/core';

export type Authors = {
  id: number;
  name: string;
}

@Component({
  selector: 'author-list',
  template: `
    <author-detail *ngFor="let author of authors" [author]="author" (select)="selectUser($event)" (delete)="deleteUser($event)"></author-detail>
    <br><br>
    <p>current author selected: {{currentUser}}</p>
  `

})
export class AuthorListComponent {

  authors: Authors[] = [
    {name: 'Nguyen Van A', id: 1},
    {name: 'Nguyen Van B', id: 2},
    {name: 'Nguyen Van C', id: 3},
    {name: 'Nguyen Van D', id: 4},
    {name: 'Nguyen Van E', id: 5},
    {name: 'Nguyen Van F', id: 6},
    {name: 'Nguyen Van G', id: 7},
    {name: 'Nguyen Van H', id: 8},
    {name: 'Nguyen Van I', id: 9},
  ];

  currentUser: string = this.authors[0].name;

  selectUser(name: string) {
    return this.currentUser = name;
  }

  deleteUser(id: number) {
    const userSelected = this.authors.find(item => item.id === id);
    if(userSelected?.name) {
      this.currentUser = userSelected.name === this.currentUser ? '' : this.currentUser; 
    }
    

    return this.authors = this.authors.filter(item => item.id !== id);
  }
}
