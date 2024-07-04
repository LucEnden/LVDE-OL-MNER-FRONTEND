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

            // Add context menu for updating the annotation label to the span
            const changeAnnotationContextMenu = document.createElement('div');
            changeAnnotationContextMenu.innerHTML = 'Test context menu';
            changeAnnotationContextMenu.classList.add(
                'absolute',
                'w-48',
                'bg-white',
                'border-2',
                'text-black',
                'shadow-md',
                'rounded-lg',
                'hidden',
                'z-10',
                'left-0',
                'origin-bottom-right',
            );

            span.style.backgroundColor = clr;
            span.classList.add(
                'relative',
                'text-white',
                'px-1',
                'rounded-lg',
                'cursor-pointer',
                'transition-all',
                'duration-200',
                'hover:px-2'
            );
            span.title = annotation.label;
            span.textContent = this.annotatedText!.text.slice(start, end);

            span.onclick = (e) => {
                console.log(annotation.label);
                changeAnnotationContextMenu.classList.toggle('hidden');
                console.log(changeAnnotationContextMenu);
            };

            span.onmouseover = () => {

            }
            span.onmouseout = () => {

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

            // We need to append the context menu to the span after it is appended to the DOM
            span.appendChild(changeAnnotationContextMenu);
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
