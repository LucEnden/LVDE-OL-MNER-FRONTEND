import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AnnotatedText } from 'src/app/models/annotated-text';

@Component({
    selector: 'app-annotated-text',
    templateUrl: './annotated-text.component.html',
    styleUrls: ['./annotated-text.component.scss']
})
export class AnnotatedTextComponent {
    @Input({ required: true }) annotatedText: AnnotatedText | null = null;
    @ViewChild('annotatedTextElem') annotatedTextElement: ElementRef<HTMLDivElement> | undefined;

    async ngAfterViewInit() {
        if (!this.annotatedText || !this.annotatedTextElement) {
            return;
        }
        
        const colorDict = this._getColorDict(this.annotatedText.annotations);
        
        // Render the text
        this.annotatedTextElement.nativeElement.innerHTML = this.annotatedText.text;

        // Render the annotations
        this.annotatedText.annotations.map(annotation => {
            const clr = colorDict[annotation.label];
            const start = annotation.start;
            const end = annotation.end;

            const span = document.createElement('span');
            span.style.backgroundColor = clr;
            span.style.color = 'white';
            span.style.padding = '2px';
            span.style.borderRadius = '5px';
            span.style.cursor = 'pointer';
            span.title = annotation.label;
            span.innerHTML = this.annotatedText!.text.slice(start, end);
            span.onclick = () => {
                console.log(annotation.label);
            };
            span.onmouseover = () => {
                span.style.backgroundColor = 'black';
            }
            span.onmouseout = () => {
                span.style.backgroundColor = clr;
            }

            // Replace the text with the span
            const spanBefore = document.createElement('span');
            spanBefore.textContent = this.annotatedText!.text.slice(0, start);
            const spanAfter = document.createElement('span');
            spanAfter.textContent = this.annotatedText!.text.slice(end);

            this.annotatedTextElement!.nativeElement.innerHTML = '';
            this.annotatedTextElement!.nativeElement.appendChild(spanBefore);
            this.annotatedTextElement!.nativeElement.appendChild(span);
            this.annotatedTextElement!.nativeElement.appendChild(spanAfter);
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
