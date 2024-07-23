import { Component, Input } from '@angular/core';
import { NerAnnotation } from 'src/app/models/ner-annotation';

@Component({
  selector: 'app-selected-annotation-details',
  templateUrl: './selected-annotation-details.component.html',
  styleUrls: ['./selected-annotation-details.component.scss']
})
export class SelectedAnnotationDetailsComponent {
    @Input() annotation: NerAnnotation | null = null;
}
