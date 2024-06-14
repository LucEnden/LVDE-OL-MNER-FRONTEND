import { NerAnnotation } from "./ner-annotation";

export class AnnotatedText {
    constructor(
        public text: string,
        public annotations: NerAnnotation[]
    ) { }
}