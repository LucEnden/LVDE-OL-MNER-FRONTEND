import { Injectable } from '@angular/core';
import { AnnotatedText } from '../models/annotated-text';
import { NerAnnotation } from '../models/ner-annotation';

@Injectable({
    providedIn: 'root'
})
export class NerModelService {
    public readonly labels = ['PERSON', 'ORG', 'LOC', 'MISC'] as const;
    public colorDict: { [key: string]: string } = {};

    constructor() {
    }

    annotate(text: string): AnnotatedText {
        // Mocking the NER model
        const annotations: NerAnnotation[] = [];

        const words = text.split(' ');
        let start = 0;
        let end = 0;
        let shouldAnnotate = true;

        for (let i = 0; i < words.length; i++) {
            const label = this.labels[Math.floor(Math.random() * this.labels.length)];
            const word = words[i];

            if (shouldAnnotate) {
                start = text.indexOf(word, end);    // Find the start index of the word
                end = start + word.length;          // Find the end index of the word

                annotations.push(new NerAnnotation(
                    word,
                    start,
                    end,
                    label,
                    Math.random()
                ));
                shouldAnnotate = false;
            } else {
                shouldAnnotate = true;
            }
        }

        this.colorDict = this.initColorDict(annotations);

        return new AnnotatedText(text, annotations);
    }

    private initColorDict(annotations: AnnotatedText['annotations']): { [key: string]: string } {
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
