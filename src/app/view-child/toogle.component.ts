import { Component } from "@angular/core";

@Component({
    selector: 'toggle',
    template: `
        <div>
            <button (click)="toggle()">Toggle</button>
            <p>{{isToggle ? 'already toggle' : 'no toggle'}}</p>
        </div>
    `
})
export class ToggleComponent {

    isToggle: boolean = false;

    toggle() {
        return this.isToggle = !this.isToggle;
    }
}