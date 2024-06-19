import { Injectable } from '@angular/core';
import { AnnotatedText } from '../models/annotated-text';
import { NerAnnotation } from '../models/ner-annotation';

@Injectable({
    providedIn: 'root'
})
export class NerModelService {

    constructor() { }

    annotate(text: string): AnnotatedText {
        // Mocking the NER model
        const annotations: NerAnnotation[] = [];
        const labels = ['PERSON', 'ORG', 'LOC', 'MISC'];

        const words = text.split(' ');
        let start = 0;
        let end = 0;
        let shouldAnnotate = true;

        for (let i = 0; i < words.length; i++) {
            const label = labels[Math.floor(Math.random() * labels.length)];
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

        return new AnnotatedText(text, annotations);
    }
}
