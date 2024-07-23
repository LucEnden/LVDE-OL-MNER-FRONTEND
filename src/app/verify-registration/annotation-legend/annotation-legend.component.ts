import { Component } from '@angular/core';
import { NerModelService } from 'src/app/services/ner-model.service';

@Component({
  selector: 'app-annotation-legend',
  templateUrl: './annotation-legend.component.html',
  styleUrls: ['./annotation-legend.component.scss']
})
export class AnnotationLegendComponent {
    constructor(
        public nerModelService: NerModelService
    ) {

    }
}
