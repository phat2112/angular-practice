import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Authors } from "./author-list.component";

@Component({
    selector: 'author-detail',
    template: `
        <div>
            <span>{{author.name}}</span>
            <button style="margin-left: 1rem" (click)="select.emit(author.name)">select</button>
            <button style="margin-left: 1rem" (click)="delete.emit(author.id)">x</button>
        </div>
    `
})
export class AuthorDetailComponent {
    @Input() author: Authors = {
        name: '',
        id: 0,
    };

    @Output() select = new EventEmitter<string>();

    @Output() delete = new EventEmitter<number>();
    
}