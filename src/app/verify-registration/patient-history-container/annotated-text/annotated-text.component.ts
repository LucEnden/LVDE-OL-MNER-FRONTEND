import { Component, Input } from '@angular/core';
import { AnnotatedText } from 'src/app/models/annotated-text';
import { NerModelService } from 'src/app/services/ner-model.service';

@Component({
    selector: 'app-annotated-text',
    templateUrl: './annotated-text.component.html',
    styleUrls: ['./annotated-text.component.scss']
})
export class AnnotatedTextComponent {
    @Input({ required: true }) annotatedText: AnnotatedText | null = null;

    constructor(
        public nerModelService: NerModelService
    ) { }
}
