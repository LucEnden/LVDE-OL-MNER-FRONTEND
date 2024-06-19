import { Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { AnnotatedText } from 'src/app/models/annotated-text';
import { AnnotationComponent } from '../annotation/annotation.component';

@Component({
    selector: 'app-annotated-text',
    templateUrl: './annotated-text.component.html',
    styleUrls: ['./annotated-text.component.scss']
})
export class AnnotatedTextComponent {
    @Input({ required: true }) annotatedText: AnnotatedText | null = null;

    // @ViewChild('annotatedTextTemplate', { read: ViewContainerRef }) annotatedTextTemplate: ViewContainerRef | undefined;
    // @ViewChild('annotatedTextSpan', { read: ElementRef<HTMLSpanElement> }) annotatedTextSpan: ElementRef<HTMLSpanElement> | undefined;
    @ViewChild('annotatedTextContainer', { read: ViewContainerRef }) annotatedTextContainer: ViewContainerRef | undefined;

    constructor() { }

    ngAfterViewInit() {
        this.constructPatientHistoryForRendering();
    }

    private async constructPatientHistoryForRendering() {
        if (this.annotatedText === null) {
            console.error('Annotated text is null');
            return;
        }
        if (this.annotatedTextContainer === undefined) {
            console.error('Annotated text container is undefined');
            return;
        }

        // // We start by injecting an element where all the text will reside in
        // // Clear the element and inject a span element with all the text
        // this.annotatedTextSpan.nativeElement.innerHTML = this.annotatedText.text;

        // Render the unannotated text
        let start: number = 0;
        let end: number = 0;

        // Render the annotations
        const clrDict = this._getColorDict(this.annotatedText.annotations);
        
        this.annotatedTextContainer.clear();
        this.annotatedText.annotations.forEach((annotation, index) => {
            // Render the text before the annotation as a plain span element
            const textBeforeAnnotation = this.annotatedText!.text.slice(start, annotation.start);
            if (textBeforeAnnotation.length > 0) {
                const textBeforeAnnotationElement = document.createElement('span');
                textBeforeAnnotationElement.innerText = textBeforeAnnotation;
                this.annotatedTextContainer!.element.nativeElement.appendChild(textBeforeAnnotationElement);
            }

            // Create an annotation component
            const annotationComponent = this.annotatedTextContainer!.createComponent(AnnotationComponent);
            annotationComponent.instance.text = annotation.text;
            annotationComponent.instance.backgroundColor = clrDict[annotation.label];
            annotationComponent.instance.textColor = 'black';

            // Render the annotation component
            this.annotatedTextContainer!.insert(annotationComponent.hostView);

            // If this is the last annotation, render the text after the last annotation
            // if (index === this.annotatedText!.annotations.length - 1) {
            //     const textAfterAnnotation = this.annotatedText!.text.slice(annotation.end);
            //     if (textAfterAnnotation.length > 0) {
            //         const textAfterAnnotationElement = document.createElement('span');
            //         textAfterAnnotationElement.innerText = textAfterAnnotation;
            //         this.annotatedTextContainer!.element.nativeElement.appendChild(textAfterAnnotationElement);
            //     }
            // }

            // start = annotation.end;
        });
    }

    private _getColorDict(annotations: AnnotatedText['annotations']): { [key: string]: string } {
        const colorDict: { [key: string]: string } = {};

        const getRandomColor = (): string => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        annotations.map(annotation => {
            if (!colorDict[annotation.label]) {
                colorDict[annotation.label] = getRandomColor();
            }
        });

        return colorDict;
    }
}
