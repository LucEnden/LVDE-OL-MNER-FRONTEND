import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { AnnotatedText } from 'src/app/models/annotated-text';
import { AnnotationComponent } from '../annotation/annotation.component';

@Component({
    selector: 'app-annotated-text',
    templateUrl: './annotated-text.component.html',
    styleUrls: ['./annotated-text.component.scss']
})
export class AnnotatedTextComponent {
    @Input({ required: true }) annotatedText: AnnotatedText | null = null;

    @ViewChild('annotatedTextElem', { read: ViewContainerRef }) annotatedTextElem: ViewContainerRef | undefined;

    constructor(
        private viewContainer: ViewContainerRef
    ) { }

    ngAfterViewInit() {
        this.constructPatientHistoryForRendering();
    }

    private async constructPatientHistoryForRendering() {
        // Create a color for each annotation
        const colorDict: { [key: string]: string } = {};

        const getRandomColor = (): string => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        this.annotatedText?.annotations.map(annotation => {
            if (!colorDict[annotation.label]) {
                colorDict[annotation.label] = getRandomColor();
            }
        });

        console.log(colorDict);

        // TODO: Implement the rendering of the entire text
        // TODO: after the rendering of the entire text, render the annotations
    }
}
