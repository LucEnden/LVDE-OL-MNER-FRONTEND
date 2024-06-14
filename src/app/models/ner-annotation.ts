export class NerAnnotation {
    constructor(
        public text: string,
        public start: number,
        public end: number,
        public label: string,
        public confidence: number
    ) { }
}