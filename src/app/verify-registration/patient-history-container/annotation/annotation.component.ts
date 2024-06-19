import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent {
    @Input({ required: true }) text: string = '';
    @Input({ required: true }) backgroundColor: string = '';
    @Input({ required: true }) textColor: string = '';
    @Input({ required: true }) label: string = '';

    constructor() { }
}
